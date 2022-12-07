import { useDispatch, useSelector } from "react-redux";

const Input = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.name);

  const cityFetching = async (e) => {
    dispatch({
      type: "SEARCH_CITY",
      payload: e.target.value,
    });
    if (e.key === "Enter") {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=60d0c2db3a11ce2740169f0c6ceaa855`
      );
      let data = await response.json();
      console.log(data);
      dispatch({
        type: "ADD_COORDINATES",
        payload: data[0],
      });
      dispatch({
        type: "SEARCH_CITY",
        payload: e.target.value,
      });
    }
  };

  return (
    <input
      className="search-input"
      onKeyUp={cityFetching}
      placeholder={"Search..."}
      onChange={(e) => {
        dispatch({
          type: "SEARCH_CITY",
          payload: e.target.value,
        });
      }}
    ></input>
  );
};
export default Input;
