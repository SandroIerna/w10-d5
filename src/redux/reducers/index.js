const initialState = {
  city: {
    name: "",
    latitude: null,
    longitude: null,
    weather: { temperature: null, weather: "" },
  },
  favourites: { cities: [] },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          cities: [...state.favourites.cities, action.payload],
        },
      };

    case "REMOVE_FROM_CITIES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          cities: [
            ...state.favourites.cities.filter(
              (jobs) => jobs._id !== action.payload._id
            ),
          ],
        },
      };

    case "SEARCH_CITY":
      return { ...state, city: { ...state.city, name: action.payload } };

    case "ADD_COORDINATES":
      return {
        ...state,
        city: {
          ...state.city,
          latitude: action.payload.lat,
          longitude: action.payload.lon,
        },
      };

    case "ADD_TO_WEATHER":
      return {
        ...state,
        city: {
          ...state.city,
          weather: {
            temperature: action.payload.main.temp,
            weather: action.payload.weather[0].description,
          },
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
