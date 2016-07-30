
import { AppDispatcher } from '../lib/AppDispatcher';
import { ActionTypes } from '../constants/constants';
import { EventEmitter } from 'events';

let links = [];

class LinkStore extends EventEmitter {
	constructor(props) {
		super(props);

		AppDispatcher.register(action => {
			switch (action.actionType) {
			case ActionTypes.RECEIVE_LINKS:
				console.log('3. In store');
				links = action.links;
				this.emit('change');
				break;
			default:
					// do nothing
			}
		});
	}

	getAll() {
		return links;
	}
}

export default new LinkStore();
