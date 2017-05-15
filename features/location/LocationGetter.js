import Q from 'q';
import _ from 'lodash';
import geolocation from 'geolocation';
import geolib from 'geolib';
import Location from './Location';

export default class LocationGetter {

  constructor(geoLibrary) {
    this.geoLibrary = geoLibrary;
  }

  getCurrentPosition() {
    const deferred = Q.defer();
    geolocation.getCurrentPosition((err, position) => {
      if (err) deferred.reject(err)
      deferred.resolve(new Location(position.coords.longitude, position.coords.latitude));
    });
    return deferred.promise;
  }

  getNearest(currentLocation, locations) {
    const coord = _.reduce(locations, (coordMap, location, key) => _.set(coordMap, key, location), {});
    const nearest = this.geoLibrary.findNearest(currentLocation, coord);
    return coord[nearest.key];
  }
}
