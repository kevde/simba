import chai from 'chai';
import geolib from 'geolib';
import LocationGetter from 'features/location/LocationGetter';
import Location from 'features/location/Location';

describe('LocationGetter', () => {
  let locatonGetter = {};
  chai.should();

  before(() => {
    locatonGetter = new LocationGetter(geolib);
  })

  it('should get the current location', () => {
    // given

    // when

    // then
  });

  it('should get the nearest location among the list', () => {
    // given
    const location1 = new Location(10, 100);
    const location2 = new Location(100, 120);
    const location3 = new Location(102, 120);
    const currentLocation = new Location(10.1, 100);

    // when
    const result = locatonGetter.getNearest(currentLocation, [location1, location2, location3]);

    // then
    result.should.be.deep.equal(location1);
  })
});
