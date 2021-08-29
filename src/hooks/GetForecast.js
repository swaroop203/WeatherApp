import { get } from "lodash";
import React from "react";

export default function GetForecast(forecastURL) {
  const [weatherData, setWeatherData] = React.useState([]);

  React.useEffect(() => {
    if (forecastURL) {
      fetch(forecastURL)
        .then((res) => res.json())
        .then((weatherResponse) => {
          setWeatherData(get(weatherResponse, "properties.periods"));
        })
        .catch((err) => {
          console.log("unable to fetch forecast URL", err);
        });
    }
  }, [forecastURL]);

  return weatherData;
}
