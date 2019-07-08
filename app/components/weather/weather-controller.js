import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	// console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	// let template = ''
	let weather = _weatherService.Weather
	document.querySelector('#weather').innerHTML = weather.getTemplate()
	// template = weather.getTemplate()
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}

//REVIEW Code completed for review

