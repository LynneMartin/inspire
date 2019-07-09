export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.description = data.description
    this.completed = data.completed

  }


  //NOTE No errors thrown
  getTemplate() {
    return `
    <h3>${this.description}</h3>

    <button onclick="app.controller.removeTodo('${this._id}')"> Delete </button> `
  }
}


// return `<div class="form-check">
//   <input class="form-check-input" type="checkbox" ${this.completed}
//     onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')">
//     <label class="form-check-label ${this.completed ? 'strikethrough' : ''}">
//       ${this.description}
//     </label>
//     <span onclick="app.controllers.todoController.removeTodo('${this._id}')">
//     </span>
//   </input>
// </div>
// `