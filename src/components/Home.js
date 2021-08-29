import { Card, CircularProgress, List, ListItem } from "@material-ui/core";
import React from "react";
import WeatherCard from "./common/WeatherCard";
import LocationHeader from "./LocationHeader";
import GetForecastOffice from "../hooks/GetForecastOffice";
import GetForecast from "../hooks/GetForecast";
import GetUserLocation from "../hooks/GetUserLocation";
function Home() {
  const userLocation = GetUserLocation();
  const { forecastURL, city, state } = GetForecastOffice(userLocation);
  const weatherData = GetForecast(forecastURL);

  if (!weatherData.length) {
    return <CircularProgress />;
  }
  return (
    <Card>
      <LocationHeader city={city} state={state} />
      <List style={{ marginTop: "60px" }}>
        {/* ^^ Example of using inline styles */}
        {weatherData.map((eachDay) => (
          <ListItem key={eachDay.name}>
            <WeatherCard eachDay={eachDay} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
}

export default Home;
