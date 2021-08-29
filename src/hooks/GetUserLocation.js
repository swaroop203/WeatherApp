import React from "react";
import { get } from "lodash";

export default function GetUserLocation() {
  const [userLocation, setUserLocation] = React.useState({
    lat: "",
    lng: "",
  });

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        lat: get(position, "coords.latitude"),
        lng: get(position, "coords.longitude"),
      });
    });
  }, []);

  return userLocation;
}
