import React, { useEffect } from "react";
// let map: google.maps.Map;

const GoogleMap = () => {
  useEffect(() => {
    console.log("fsfs", document["google"]);

    new document["google"].maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      },
    );
  }, []);

  return <div id="map"></div>;
};

export { GoogleMap };
