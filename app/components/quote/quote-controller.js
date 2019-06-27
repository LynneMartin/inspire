import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let template = ''
  let quote = _qs.Quote
  template = quote.getTemplate()
  document.querySelector('quote').innerHTML = template
}

export default class QuoteController {

  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}

//REVIEW Code ready for review