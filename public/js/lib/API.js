
import { ServerActions } from '../actions/ServerActions';

const params = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		query: `
			{
				links {
					_id,
					title,
					url
				}
			}
		`
	})
};

export const API = {
	fetchLinks() {
		fetch('/graphql', params)
			.then(res => res.json())
			.then(res => {
				console.log('1. In API');
				ServerActions.receiveLinks(res.data.links);
			});
	}
};
