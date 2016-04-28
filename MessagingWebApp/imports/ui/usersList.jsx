/*
* component for render users list in private(all online users)
* and all chat(online users in selected region)
*/

import React, {Component, PropTypes} from 'react';

export default class UsersList extends Component {

	// handler for open private messaging
	onDoubleClick() {
    if(this.props.checkPrivate) {
			Session.set('user2', this.props.user);
			Session.set('user1', Meteor.user().username);
			Meteor.call('openPrivateChat',Meteor.user().username, this.props.user);
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
	user: PropTypes.string.isRequired, // user for render
  checkPrivate: PropTypes.bool.isRequired // checker for verification private or all chat
};
