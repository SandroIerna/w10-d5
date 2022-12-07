// NOT USED ANYMORE

import { Navbar, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const PageNavbar = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.city.name);
  // const coordinates = useSelector((state) => state.city.latitude);
  // const latitude = useSelector((state) => state.city.latitude);
  // const longitude = useSelector((state) => state.city.longitude);

  // const weatherFetching = async () => {
  //   if (coordinates !== null) {
  //     let response = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=60d0c2db3a11ce2740169f0c6ceaa855`
  //     );
  //     let data = await response.json();
  //     console.log(data);
  //     dispatch({
  //       type: "ADD_TO_WEATHER",
  //       payload: data,
  //     });
  //   }
  // };

  const cityFetching = async (e) => {
    if (e.key === "Enter") {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=60d0c2db3a11ce2740169f0c6ceaa855`
      );
      let data = await response.json();
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
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        SpicyCold
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Link to="/favourites" className="mr-auto">
          Favourites
        </Link>

        <Nav>
          <input
            onKeyUp={cityFetching}
            placeholder={"search"}
            // onChange={(e) => {
            //   setCity(e.target.value);
            // }}
            onChange={(e) => {
              dispatch({
                type: "SEARCH_CITY",
                payload: e.target.value,
              });
            }}
            // onKeyUp={}
          ></input>
          <Nav.Link eventKey={2} href="#memes">
            Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default PageNavbar;
