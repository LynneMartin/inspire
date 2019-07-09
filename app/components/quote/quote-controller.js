import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawQuote() {
  //let template = ''
  let quoteElem = document.querySelector("#quote")
  let quote = _qs.Quote
  quoteElem.innerHTML = quote.Template 
  //template = quote.getTemplate()
  //document.querySelector('#quote').innerHTML = template
}

//REVIEW  Is ^^^ correct, or do I need to write out as...
// function drawQuote() {
// let quote = _qs.Quote
// document.getElementById('quote').innerHTML = quote.getTemplate()

export default class QuoteController {

  constructor() {
    _qs.addSubscriber('quote', drawQuote)
    _qs.getQuote()
  }
}

//REVIEW Code ready for review