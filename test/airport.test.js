const Airport = require('../lib/airport');

describe('airport', () => {

  beforeEach(() => {
    this.airport = new Airport(1);
    this.new_airport = new Airport(10);
    this.plane = "plane";
    this.another_plane = "another_plane"
  })
  
  describe('hangar size', () => {

    it('has a default size', () => {
      let another_airport = new Airport;

      expect(another_airport.hangar_size).toBe(1);
    })

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
      this.airport.takeoff(this.plane)
      
      expect(this.airport.hangar).not.toContain(this.plane)
    });
  });
});
