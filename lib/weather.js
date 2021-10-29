class Weather {

  constructor () {
    this.list = ["sunny", "stormy"]
    this.current = 0
  }

  check () {
    return `It is a ${this.status()} day`;
  }

  status () {
    return this.list[this.current]
  }

  change () {
    this.current = this.random()
  }

  random () {
    return Math.floor((Math.random() * this.list.length))
  }
}

module.exports = Weather;
