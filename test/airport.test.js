const Weather = require('../lib/weather');
const Airport = require('../lib/airport');

jest.mock('../lib/weather.js')

describe('airport', () => {

  beforeEach(() => {
    this.weather = new Weather
    this.airport = new Airport(1, this.weather);
    this.new_airport = new Airport(10, this.weather);
    this.plane = "plane";
    this.another_plane = "another_plane"
    Weather.mockClear();
  });
  
  describe('hangar size', () => {

    it('has a default size', () => {
      let another_airport = new Airport;

      expect(another_airport.hangar_size).toBe(1);
    });

    it('default can be overridden', () => {
      expect(this.airport.hangar_size).toBe(1);
      expect(this.new_airport.hangar_size).toBe(10);
    });

  });

  describe('#land', () => {
    it('lands a plane', () => {
      this.airport.land(this.plane)

      expect(this.airport.hangar).toContain(this.plane)
    });

    it("Doesn't land when hangar is full", () => {
      this.airport.land(this.plane)

      expect(() => {
        this.airport.land(this.another_plane);
      }).toThrow('Error: Hangar is full');
    });
  });

  describe('#takeoff', () => {
    it('plane takes off and is no longer in hangar', () => {
      this.airport.takeoff(this.plane);
      
      expect(this.airport.hangar).not.toContain(this.plane);
    });
  });

  describe('weather checks', () => {
    it("doesn't land with stormy weather", () => {
      jest.spyOn(this.airport.weather, 'status').mockReturnValue('stormy');

      expect(() => {
        this.airport.land(this.plane);
      }).toThrow('Error: Cannot land, stormy weather');
    });

    it("doesn't take off with stormy weather", () => {
      this.airport.land(this.plane)

      jest.spyOn(this.airport.weather, 'status').mockReturnValue('stormy');

      expect(() => {
        this.airport.takeoff(this.plane);
      }).toThrow('Error: Cannot land, stormy weather');
    });
  });
});
