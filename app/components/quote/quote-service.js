import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}

export default class QuoteService {
	get Quote() {
		return //TODO _state.quote?
	}

	//TODO add subscribers and quote api

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn) //REVIEW Check syntax
	}

	getQuote() {
		_quoteApi.get()
			.then(res => {
			_setState('quote', new Quote(res.data))
		})
	}
}

//REVIEW Is code within the correct curlies?
export default class QuoteService {

}
