// @ts-nocheck
import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	let template = ''

	todos.forEach(t => template += t.getTemplate())

	document.querySelector('#todos').innerHTML = template
}

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
