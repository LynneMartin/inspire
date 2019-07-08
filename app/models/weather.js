export default class Weather {
  constructor(data) {
    // console.log('[RAW WEATHER API DATA]', data);


    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C

    //NOTE Kelvin to F conversion ℉=((K-273.15)*1.8)+32, found on w3 schools.

    this.city = data.name
    this.temp = data.temp || ((data.main.temp - 273.15) * (9 / 5) + 32).toFixed(2)
    this.humidity = data.humidity || data.main.humidity
    this.description = data.description || data.weather[0].description
  }

  getTemplate() {
    return `
    <h1>${this.city}</h1>
    <h1>${this.temp} °F</h1>
    <h3>Humidity: ${this.humidity} %<h/3>
    <h3>Current conditions: ${this.description}</h3>
    `
  }
}