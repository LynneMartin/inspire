// @ts-nocheck
import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	document.querySelector('#todos').innerHTML = todos.getTemplate()
}
//REVIEW ^^ I tried to basically copy the draw function from the weather controller but this isn't working either. New tasks are adding in the back end but not drawing to the website.


// function _drawError() {
// 	// console.error('[TODO ERROR]', _todoService.TodoError)
// 	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message} `
// }

export default class TodoController {
	constructor() {
		// _todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
		// this.todoService = new TodoService()
	}

	//passes an event
	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			// DONT FORGET TO BUILD YOUR to do OBJECT
			description: form.description.value,
		}
		_todoService.addTodo(todo)
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}
}
