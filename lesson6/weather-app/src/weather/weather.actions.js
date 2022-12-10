import { getWeatherData } from './weather.gateway.js';

export const SET_CITIES = 'CITIES/SET';

const setCities = cities => ({ type: SET_CITIES, payload: { cities } });

export const getCitiesAsync = () => {
  return dispatch => {
    getWeatherData().then(cities => dispatch(setCities(cities)));
  };
};
