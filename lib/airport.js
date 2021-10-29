const Weather = require('../lib/weather')

class Airport { 
  
  constructor (size=1) {
    this.hangar_size = size;
    this.hangar = []
    this.weather = new Weather
  }

  land = (plane) => {
    if ( this.hangar.length === this.hangar_size )
      throw "Error: Hangar is full";
    else
      this.hangar.push(plane);
  }

  takeoff = (plane) => {
    let index = this.hangar.indexOf(plane)
    this.hangar.splice(index, 1)
  }
}

module.exports = Airport;
