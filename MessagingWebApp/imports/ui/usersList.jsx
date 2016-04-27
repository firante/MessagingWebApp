import React, {Component, PropTypes} from 'react';

export default class UsersList extends Component {
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
	user: PropTypes.string.isRequired,
  checkPrivate: PropTypes.bool.isRequired
};
