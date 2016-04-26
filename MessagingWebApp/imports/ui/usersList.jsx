import React, {Component, PropTypes} from 'react';

export default class UsersList extends Component {
	onDoubleClick() {
		if(this.props.onDoubleClick) {
			this.props.onDoubleClick(Meteor.user().username, this.props.user);
			Session.set('user2', this.props.user);
			Session.set('user1', Meteor.user().username);
		}
	}

	render() {
		let username = this.props.user.substring(0, this.props.user.indexOf('@'));
		return (
			<li
				className='list-group-item btn'
				onDoubleClick={this.onDoubleClick.bind(this)} > {username} </li>
		);
	}
}

UsersList.propTypes = {
	user: PropTypes.string.isRequired
};
