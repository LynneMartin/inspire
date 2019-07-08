import BackgroundImage from "../../models/image.js";

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


//SECTION PUBLIC
export default class ImageService {

	get Image() {
		return new BackgroundImage(_state.image)
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
				_setState('image', new BackgroundImage(res.data))
			})
	}
}
//REVIEW Code ready for review