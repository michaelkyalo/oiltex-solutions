import React, { useEffect, useState } from "react";

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Replace with real API
    setWeather({ temp: 28, condition: "Sunny", rainChance: "10%" });
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Weather Forecast</h2>
      <p>Temperature: {weather.temp}°C</p>
      <p>Condition: {weather.condition}</p>
      <p>Chance of rain: {weather.rainChance}</p>
    </div>
  );
}

export default Weather;
