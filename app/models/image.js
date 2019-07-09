export default class BackgroundImage {
  constructor(data) {
    this.url = data.url

  }
  getTemplate() {
    return `${this.url}`
  }
}

//REVIEW Code working and drawing to website properly. Picture changes with each page refresh, but no bonus picture refresh button added.
