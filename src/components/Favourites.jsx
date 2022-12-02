import { useSelector } from "react-redux";

const Favourites = () => {
  const favouriteCities = useSelector((state) => state.favourites.cities);

  return (
    <ol>
      {favouriteCities.forEach(async (city) => {
        let response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=60d0c2db3a11ce2740169f0c6ceaa855`
        );
        let data = await response.json();
        <li>{data}data</li>;
      })}
    </ol>
  );
};
export default Favourites;
