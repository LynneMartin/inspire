export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //TODO Remove console log line above

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C

    //TODO Kelvin to F conversion ℉=((K-273.15)*1.8)+32, found on w3 schools.


    this.city = data.name
    this.kelvin = data.main.temp 
  }
}