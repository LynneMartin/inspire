import WeatherController from "./components/weather/weather-controller.js";
import QuoteController from "./components/quote/quote-controller.js";
import ImageController from "./components/image/image-controller.js";
import TodoController from "./components/todo/todo-controller.js";

// HEY WHERE ARE ALL OF YOUR CONTROLLERS??
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      quoteController: new QuoteController(),
      imageController: new ImageController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App()

// @ts-ignore
REVIEW // DONE WITH MAIN.JS