export default class Quote {
  constructor(data) {
    this.id = data.id || data.quote.id
    this.body = data.body || data.quote.body
    this.author = data.author || data.quote.author
  }
  getTemplate() {
    return `<p data-toggle="tooltip" data-placement="bottom" title="${this.author}">"${this.body}"</p>`
  }
}

//REVIEW Code completed for review

// { <span class="thequote"><i>"${this.body}"</i></span><span class="author">${this.author}</span> }