function WeatherDetails({ temp, Description, clouds, wind, humidity }) {
  return (
    <div>
      <h3>Weather Details</h3>
      <p> {temp}K</p>
      <p>{Description}</p>
      <p>Cloudy: %{clouds}</p>
      <p>Wind Speed: {wind} m/min</p>
      <p>Humidity: %{humidity}</p>
    </div>
  );
}
export default WeatherDetails;
