// @ts-nocheck
import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {

	let template = ''
	let todosElem = document.querySelector('#todo')
	let todos = _todoService.Todos
	todos.forEach(t => {
		template += t.Template
	})

	todosElem.innerHTML = template



	//NOTE I need a function that will create a running list of todo items

	//TODO finish this 
	//${ incomplete } <h3>"Tasks left:"</h3 >
	document.querySelector('#todos').innerHTML = template
	document.querySelector('#count').innerHTML =
		`<p>Number of tasks: ${todos.length}</p>`
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

	//corresponds to index.html todo section (event)
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
