export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.description = data.description
    this.completed = data.completed

  }

  getTemplate() {
    return //TODO Complete this section with Todo controller
  }