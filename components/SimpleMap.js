import _ from 'lodash';
import React from 'react';
import GoogleMapReact from 'google-map-react';
import Icon from 'antd/lib/icon';

const Location = ({ text }) => <Icon type="environment">{text}</Icon>;

export default class SimpleMap extends React.Component {
  constructor(props) {
    super(props);
    this.defaultZoom = 15;
    this.defaultCenter = props.center;
    this.state = { center: props.center, zoom: this.defaultZoom };
  }

  changeCenter(newCenter, newZoom) {
    const newState = _.merge(this.state, { center: newCenter, zoom: newZoom });
    this.props.onChange(newCenter.lng, newCenter.lat);
    this.setState(newState);
  }

  componentWillReceiveProps(newState) {
    const changedState = _.merge({ zoom: this.defaultZoom }, newState);
    this.setState(changedState);
  }

  render() {
    return (
      <div style={{height:'50vh'}}>
      <GoogleMapReact
        defaultCenter={this.defaultCenter}
        defaultZoom={this.defaultZoom}
        onBoundsChange={(center, zoom) => this.changeCenter(center, zoom)}
        center={this.state.center}
        zoom={this.state.zoom}
      >
        <Location
          lat={this.state.center.lat}
          lng={this.state.center.lng}
          text={'Current Location'}
        />
      </GoogleMapReact>
      </div>
    );
  }
}
