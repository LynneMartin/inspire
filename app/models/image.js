export default class BackgroundImage {
  constructor(data) {
    this.url = data.url

  }
  getTemplate() {
    return `${this.url}`
  }
}

//REVIEW Code completed for review
