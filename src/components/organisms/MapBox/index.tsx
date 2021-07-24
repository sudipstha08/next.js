import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { EnvironmentOutlined } from "@ant-design/icons";

const MapBox = () => {
  const [coords, setCoords] = React.useState<any>([]);
  const [viewport, setViewport] = React.useState({
    longitude: 85.30678,
    latitude: 27.747962,
    zoom: 14,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_TOKEN}
      width="100%"
      height="80vh"
      onViewportChange={setViewport}
      onClick={(e) => setCoords(e.lngLat)}
    >
      {coords.length != 0 && (
        <Marker
          latitude={coords[1]}
          longitude={coords[0]}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <EnvironmentOutlined style={{ color: "red", fontSize: 30 }} />
        </Marker>
      )}
    </ReactMapGL>
  );
};

export { MapBox };
// https://visgl.github.io/react-map-gl/docs/api-reference/attribution-control
