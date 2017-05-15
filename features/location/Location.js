export default class Location {
  constructor(longitude, latitude) {
    this.longitude = longitude;
    this.latitude = latitude;
  }

  getGoogleLocation() {
    return { lng: this.longitude, lat: this.latitude };
  }
}
