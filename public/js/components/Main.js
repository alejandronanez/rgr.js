import React, { Component } from 'react';
import { API } from '../lib/API';
import LinkStore from '../stores/LinkStore';

function getAppState() {
	return {
		links: LinkStore.getAll()
	};
}

export class Main extends Component {
	constructor() {
		super();

		this.state = getAppState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		API.fetchLinks();
		LinkStore.on('change', this.onChange);
	}

	componentWillUnmount() {
		LinkStore.removeListener('change', this.onChange);
	}

	onChange() {
		console.log('4. In the view');
		this.setState(getAppState);
	}

	render() {
		const links = this.state.links
						.map(link => <li key={link._id}><a href={link.url}>{link.title}</a></li>);
		return (
			<div>
				<h3>Links</h3>
				<ul>
					{links}
				</ul>
			</div>
		);
	}
}
