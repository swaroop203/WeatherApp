import React from "react";
import { get } from "lodash";
import { WEATHER_API } from "../constants/apis";
import {
  DEFAULT_CITY,
  DEFAULT_LAT,
  DEFAULT_LNG,
  DEFAULT_STATE,
} from "../constants/defaults";

export default function GetForecastOffice({ lat, lng }) {
  lat = lat || DEFAULT_LAT;
  lng = lng || DEFAULT_LNG;
  const [forecastURL, setForecastURL] = React.useState("");
  const [city, setCity] = React.useState(DEFAULT_CITY);
  const [state, setState] = React.useState(DEFAULT_STATE);
  React.useEffect(() => {
    if (lat && lng) {
      fetch(`${WEATHER_API}/${lat},${lng}`)
        .then((res) => res.json())
        .then((officeResponse) => {
          setForecastURL(get(officeResponse, "properties.forecast"));
          setCity(
            get(
              officeResponse,
              "properties.relativeLocation.properties.city",
              DEFAULT_CITY
            )
          );
          setState(
            get(
              officeResponse,
              "properties.relativeLocation.properties.state",
              DEFAULT_STATE
            )
          );
        })
        .catch((err) => {
          console.log("Unable to fetch URL", err);
        });
    }
  }, [lat, lng]);

  return {
    city,
    state,
    forecastURL,
  };
}
