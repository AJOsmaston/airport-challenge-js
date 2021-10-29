const Weather = require('../lib/weather')

class Airport { 
  
  constructor (size=1, weather=new Weather) {
    this.hangar_size = size;
    this.hangar = [];
    this.weather = weather;
  }

  land = (plane) => {
    if ( this.weather.status() === 'stormy' )
      throw "Error: Cannot land, stormy weather"
    else if ( this.hangar.length === this.hangar_size )
      throw "Error: Hangar is full";
    else
      this.hangar.push(plane);
  }

  takeoff = (plane) => {
    let index = this.hangar.indexOf(plane)
    if ( this.weather.status() === 'stormy' )
      throw "Error: Cannot land, stormy weather"
    else
      this.hangar.splice(index, 1)
  }
}

module.exports = Airport;
