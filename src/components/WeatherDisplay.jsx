// NOT USED ANYMORE

import { Button, Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const LocalWeather = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.name);
  const coordinates = useSelector((state) => state.city.latitude);
  const latitude = useSelector((state) => state.city.latitude);
  const longitude = useSelector((state) => state.city.longitude);
  const temperature = useSelector((state) => state.city.weather.temperature);
  const weather = useSelector((state) => state.city.weather.weather);

  const weatherFetching = async () => {
    if (coordinates !== null) {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d0c2db3a11ce2740169f0c6ceaa855`
      );
      let data = await response.json();
      console.log(data);
      dispatch({
        type: "ADD_TO_WEATHER",
        payload: data,
      });
    }
  };

  useEffect(() => {
    weatherFetching();
    // fetchMap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates]);

  const temperatureConverter = (valNum) => {
    valNum = parseFloat(valNum);
    let celsius = valNum - 273.15;
    return celsius.toFixed(1);
  };

  return (
    <Container>
      {city !== "" && (
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-0">{city}</h2>
          </Col>
          <Col xs={12} md={6} className="d-flex  align-items-center">
            <p className="my-0 mx-4">{temperatureConverter(temperature)}°</p>
            <p className="my-0 mx-4">{weather}</p>
            <Button
              variant="secondary"
              onClick={() => {
                dispatch({
                  type: "ADD_TO_FAVOURITES",
                  payload: city,
                });
              }}
            >
              Add to favourites
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default LocalWeather;
