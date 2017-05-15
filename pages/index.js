import React from 'react';
import geolib from 'geolib';
import Button from 'antd/lib/button';
import Layout from 'antd/lib/layout';
import stylesheet from 'styles/index.scss';
import LocationGetter from 'features/location/LocationGetter';
import Location from 'features/location/Location';
import SimpleMap from 'components/SimpleMap';

// or, if you work with plain css
// import stylesheet from 'styles/index.css'
const { Header, Content, Footer } = Layout;

const getter = new LocationGetter(geolib);
export default class Index extends React.Component {
  state = {
    position: new Location(59.95, 30.33)
  }

  changeCenterLocation(longitude, latitude) {
    this.setState({ position: new Location(longitude, latitude) });
  }

  refreshLocation() {
    getter.getCurrentPosition().then((location) => {
      this.setState({ position: location })
      this.forceUpdate();
    });
  }

  render() {
    return (<Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Header>Hello Kevin</Header>
    <Content>Hello Kevin
    <SimpleMap center={this.state.position.getGoogleLocation()} onChange={(longitude, latitude) => this.changeCenterLocation(longitude, latitude)}></SimpleMap>
    <Button onClick={() => this.refreshLocation()}>ciao</Button>
    {JSON.stringify(this.state.position)}
    </Content>
    <Footer>Hello Kevin</Footer>
  </Layout>)
  }
}
