import axios from 'axios';

const API_KEY = 'c6a64aa96ea68da1ae0e9d606d4c7b6f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // if react-promise, redux stops the action and wait until request returns, 
  // and set the return data to payload.

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
