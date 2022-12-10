import { getCities } from './weather.gateway.js';

export const SET_CITIES = 'CITIES/SET';

const setCities = cities => ({ type: SET_CITIES, payload: { cities } });

export const getWeatherData = () => {
  return dispatch => {
    getCities().then(cities => dispatch(setCities(cities)));
  };
};
