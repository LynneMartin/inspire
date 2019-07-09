import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  let quote = _qs.Quote
  let quoteElem = document.querySelector("#quote")
  quoteElem.innerHTML = quote.Template
  // document.querySelector('#quote').innerHTML = quote.Template
}


export default class QuoteController {

  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}
