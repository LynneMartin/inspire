export default class Quote {
  constructor(data) {
    this.id = data.id || data.quote.id
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author
  }

  get Template() {
    return `<p class="quote">"${this.body}" -  ${this.author}</p>`
  }
}

