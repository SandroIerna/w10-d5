import {} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Input from "./Input";
import WeatherCard from "./WeatherCard";

const NewStyle = () => {
  const dispatch = useDispatch();
  const latitude = useSelector((state) => state.city.latitude);
  const longitude = useSelector((state) => state.city.longitude);

  const weatherFetching = async (latitude, longitude) => {
    if (latitude !== null) {
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
    weatherFetching(41.8933, 12.4829);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    weatherFetching(latitude, longitude);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude]);

  return (
    <div className="full-page d-flex justify-content-center align-items-center">
      <Input />
      <WeatherCard />
    </div>
  );
};
export default NewStyle;
