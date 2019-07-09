export default class Todo {
  constructor(data) {
    this._id = data.id || data._id
    this.description = data.description
    this.completed = data.completed

  }

  //NOTE todo list button and toggle functionality

  getTemplate() {
    if (this.completed) {
      return `<div id="todo-ck" class="col-1"><input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" type="checkbox" checked></div>
                        <div id="todo-desc" class="col-8"><h3><s style="color: red">${this.description}</s></h3></div>
                        <div id="todo_btn" class="col-3"><button onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-primary">Delete</button></div>
                        `
    } else {
      return `<div id="todo-ck" class="col-1"><input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" type="checkbox"></div>
                            <div id="todo-desc" class="col-8"><h3>${this.description}</h3></div>
                            <div id="todo_btn" class="col-3"><button onclick="app.controllers.todoController.removeTodo('${this._id}')" class="btn btn-primary">Delete</button></div>
                            `
    }
  }
}

                          // getTemplate() {
                          //   return `
                          //   <h3>${this.description}</h3>

                          //   <button onclick="app.controllers.todoController.removeTodo('${this._id}')"> Delete </button> 

                          //   <div id="todo-ck" class="col-1"><input onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" type="checkbox"></div>

                          //   `
                          // }