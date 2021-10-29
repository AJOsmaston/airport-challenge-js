const Weather = require('../lib/weather');

describe('weather', () => {

  beforeEach(() => {
    this.weather = new Weather
  })
  
  describe('status', () => {
    it('is sunny by default', () => {
      expect(this.weather.check()).toBe("It is a sunny day")
    });
    
    it('quicker status check', () => {
      expect(this.weather.status()).toBe("sunny")
    });

    it('can be changed to sunny', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.1);
      this.weather.change()
      expect(this.weather.check()).toBe("It is a sunny day")
      jest.spyOn(global.Math, 'random').mockRestore();
    });

    it ('can be changed to stormy', () => {
      jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
      this.weather.change()
      expect(this.weather.check()).toBe("It is a stormy day")
      jest.spyOn(global.Math, 'random').mockRestore();
    }); 
  });
});
