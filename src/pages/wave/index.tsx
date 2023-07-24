import { useCallback, useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Timeline from "wavesurfer.js/dist/plugins/timeline.js";

// WaveSurfer hook
const useWavesurfer = (containerRef: any, options: any) => {
  const [wavesurfer, setWavesurfer] = useState(null);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!containerRef.current) return;

    const ws = WaveSurfer.create({
      ...options,
      container: containerRef.current,
    });

    setWavesurfer(ws);

    return () => {
      ws.destroy();
    };
  }, [options, containerRef]);

  return wavesurfer;
};

// Create a React component that will render wavesurfer.
// Props are wavesurfer options.
const WaveSurferPlayer = (props) => {
  const containerRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const wavesurfer = useWavesurfer(containerRef, props);

  // On play button click
  const onPlayClick = useCallback(() => {
    wavesurfer?.isPlaying() ? wavesurfer?.pause() : wavesurfer?.play();
  }, [wavesurfer]);

  // Initialize wavesurfer when the container mounts
  // or any of the props change
  useEffect(() => {
    if (!wavesurfer) return;

    setCurrentTime(0);
    setIsPlaying(false);

    const subscriptions = [
      wavesurfer.on("play", () => setIsPlaying(true)),
      wavesurfer.on("pause", () => setIsPlaying(false)),
      wavesurfer.on("timeupdate", (currentTime) => setCurrentTime(currentTime)),
    ];

    return () => {
      subscriptions.forEach((unsub) => unsub());
    };
  }, [wavesurfer]);

  return (
    <>
      <div ref={containerRef} style={{ minHeight: "120px", width: "100%" }} />

      <button onClick={onPlayClick} style={{ marginTop: "1em" }}>
        {isPlaying ? "Pause" : "Play"}
      </button>

      <p>Seconds played: {currentTime}</p>
    </>
  );
};

// Another React component that will render two wavesurfers
export const AudioPlayer = () => {
  const urls = [
    "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3",
    "/examples/audio/stereo.mp3",
  ];
  const [audioUrl, setAudioUrl] = useState(urls[0]);

  // Swap the audio URL
  const onUrlChange = useCallback(() => {
    urls.reverse();
    setAudioUrl(urls[0]);
  }, []);

  // Render the wavesurfer component
  // and a button to load a different audio file
  return (
    <>
      <WaveSurferPlayer
        height={100}
        width={1000}
        waveColor="white"
        progressColor="red"
        url={
          "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
        }
        plugins={[Timeline.create()]}
        barWidth={2}
        barGap={2}
        barRadius={2}
      />

      <button onClick={onUrlChange}>Change audio</button>
    </>
  );
};

// https://wavesurfer-js.org/examples/#all-options.js
// https://codesandbox.io/s/nextjs-wavesurfer-gjn3t?file=/pages/about.js
