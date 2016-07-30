
import { AppDispatcher } from '../lib/AppDispatcher';
import { ActionTypes } from '../constants/constants';

export const ServerActions = {
	receiveLinks(links) {
		console.log('2. In server actions');
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_LINKS,
			links
		});
	}
};
