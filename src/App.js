import WeatherDetails from "./components/WeatherDetails";
import { API_URL, ApiKey } from "./constants";

import Filter from "./components/Filter";
import React, { useState } from "react";

export default function App() {
  const [isLoading, setIsLoeading] = useState(false);
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const onUpdateSearch = (searchValue) => setLocation(searchValue);
  const onSearchLocation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${ApiKey}`
    )
      .then((res) => res.json())
      .then((res) => setWeatherData(res))
      .then(() => setIsLoeading(true));
  };

  return (
    <div className="container">
      <div className="blur-background-image" />
      <div className="left-side"></div>
      <div className="right-side">
        <Filter
          onUpdateSearch={onUpdateSearch}
          onSearchLocation={onSearchLocation}
        />

        {isLoading && weatherData.main ? (
          <WeatherDetails
            temp={weatherData.main.temp}
            Description={weatherData.weather[0].main}
            clouds={weatherData.clouds.all}
            humidity={weatherData.main.humidity}
            wind={weatherData.wind.speed}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
