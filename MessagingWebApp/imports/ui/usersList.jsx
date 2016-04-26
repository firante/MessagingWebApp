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
		return (
			<li
				className='list-group-item btn'
				onDoubleClick={this.onDoubleClick.bind(this)} > {this.props.user} </li>
		);
	}
}

UsersList.propTypes = {
	user: PropTypes.string.isRequired
};
