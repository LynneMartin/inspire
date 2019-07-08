// @ts-nocheck
import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	//WHAT IS MY PURPOSE?
	let template = ''
	let todos = _todoService.Todos
	let incomplete = 0

	//NOTE I need a function that will create a running list of todo items
	function


		template() `<h3>${incomplete} Tasks left</h4>
	document.querySelector('#todos').innerHTML = template
	document.querySelector('#count').innerHTML = <p>Number of tasks: ${todos.length}</p>
}

function _drawError() {
	// console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message } `
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()

	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR to do OBJECT
			description: form.description.value
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
