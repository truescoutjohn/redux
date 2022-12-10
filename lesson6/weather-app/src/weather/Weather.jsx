import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCitiesAsync } from './weather.actions.js';

const Weather = ({ cities, getCitiesAsync }) => {
  useEffect(() => {
    getCitiesAsync();
  }, []);
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {cities.map(city => (
          <li key={city.id} className="city">
            <span className="city__name">{city.name}</span>
            <span className="city__temperature">{city.temperature} F</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

const mapState = state => ({
  cities: state.cities,
});

const mapDispatch = {
  getCitiesAsync,
};

export default connect(mapState, mapDispatch)(Weather);
