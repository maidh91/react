import React, { Component } from 'react';
import { connect } from 'react-redux';

class Map extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    // this.refs.map
    return <div ref="map" className="ggmap" />;
  }
}

export default connect()(Map);
