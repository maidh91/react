import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "./chart";
import Map from './map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><Map lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressure} color="green" /></td>
        <td><Chart data={humidity} color="black" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature</td>
            <td>Pressure</td>
            <td>Humidity</td>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

const mapStateToProp = ({ weather }) => ({
  weather
});

export default connect(mapStateToProp)(WeatherList);
