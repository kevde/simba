import Church from './Church';
import Location from '../location/Location';

export default class ChurchCollection {
  getAll() {
    return [new Church('Paco Church', new Location(12, 100)), new Church('Caloocan', new Location(12, 102))];
  }
}
