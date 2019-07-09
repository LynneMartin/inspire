import Todo from "../../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Lynne/todos/',
	timeout: 5000
});

let _state = {
	todos: [],
	error: {}
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {

	get TodoError() {
		return _state.error
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	//NOTE Todo getter
	get Todos() {
		return _state.todos
	}

	getTodos() {
		//console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//console.log("Got the Todo List", res)
				let serverTodos = res.data.data
				let todos = serverTodos.map(t => new Todo(t))
				_setState('todos', todos)
				// WHAT DO YOU DO WITH THE RESPONSE?
			})
			.catch(err => _setState('error', err))
	}

	addTodo(newTodo) {
		todoApi.post('', newTodo)
			.then(res => {
				let serverTodos = res.data.data
				let todo = new Todo(serverTodos)
				let todos = this.Todos
				todos.unshift(todo)
				_setState('todos', todos)

				// WHAT DO YOU DO AFTER CREATING A NEW TODO?
			})
			.catch(err => _setState('error', err))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		// Be sure to change the completed property to its opposite
		//todo.completed = !todo.completed //<-- THIS FLIPS A BOOL

		// this.getTodos('#todos')
		// 	.catch(err => _setState('error', err.response.data))

		todoApi.put(todoId, todo)
			.then(res => {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
				this.getTodos()
			})
			.catch(err => _setState('error', err))
	}

	removeTodo(todoId) {
		// This one is on you to write.... 
		// The http method is delete at the todoId
		todoApi.delete(todoId)
			.then(() => {
				this.getTodos()
			})
			.catch(err => _setState('error', err))

	}
}


		// strikethrough(id) {
		// 	todoApi.put(id)
		// }