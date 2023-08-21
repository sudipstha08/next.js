import React, { useEffect } from "react";
import { load } from "@fingerprintjs/fingerprintjs";

/**
 * FingerprintJS is a source-available, client-side, browser fingerprinting
 * library that queries browser attributes and computes a
 * hashed visitor identifier from them. Unlike cookies and
 * local storage, a fingerprint stays the same in incognito/private
 * mode and even when browser data is purged.
 */
const useBrowserFingerPrint = (): string => {
  const [fpHash, setFpHash] = React.useState("");

  useEffect(() => {
    const setFp = async () => {
      const fp = await load();

      const { visitorId } = await fp.get();

      setFpHash(visitorId);
    };

    setFp();
  }, []);

  return fpHash;
};

export { useBrowserFingerPrint };
