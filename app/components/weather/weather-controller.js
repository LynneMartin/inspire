import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	//remember to remove the console log line below.
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
	let template = ''
	let weather = _weatherService.Weather
	template = weather.getTemplate()
	document.querySelector('weather').innerHTML = template
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}

//REVIEW Code completed for review

