/*
* class for render loggin button
*/

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';

export default class AccountUIWrapper extends Component {
	componentDidMount() {
		this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUnmount() {
		Blaze.remove(this.view);
	}

	render() {
		return (
			<div>
				<span ref='container' />
			</div>
		)
	}
}
