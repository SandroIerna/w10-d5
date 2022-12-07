import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const WeatherCard = () => {
  const icon = useSelector((state) => state.city.weather.icon);
  const temperature = useSelector((state) => state.city.weather.temperature);
  const weather = useSelector((state) => state.city.weather.weather);
  const humidity = useSelector((state) => state.city.weather.humidity);
  const name = useSelector((state) => state.city.name);

  const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    let celsius = valNum - 273.15;
    return celsius.toFixed(1);
  };

  const toUpperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="weather-card">
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <h2>{name}</h2>
        </Col>
        <Col>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather icon"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="text-center my-3 weather-details">
          Temperature
        </Col>
        <Col xs={6} className="text-center my-3 weather-details">
          {temperatureConverter(temperature)}°
        </Col>
        <Col xs={6} className="text-center my-3 weather-details">
          Weather
        </Col>
        <Col xs={6} className="text-center my-3 weather-details">
          {toUpperCase(weather)}
        </Col>
        <Col xs={6} className="text-center my-3 weather-details">
          Humidity
        </Col>
        <Col xs={6} className="text-center my-3 weather-details">
          {humidity}%
        </Col>
        {/* <Col xs={12} className="text-center">
          Alba
        </Col>
        <Col xs={12} className="text-center">
          Tramonto
        </Col> */}
      </Row>
    </div>
  );
};
export default WeatherCard;
