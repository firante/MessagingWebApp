import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';


import { getRegions, addOnlineUser, removeOnlineUser,
  getUsersByRegion, getMessagesByRegion, getCurrentUserRegion,
  getAllOnlineUsers, getPrivateMessage } from '../api/events.jsx';
import RegionSelector from './regionSelector.jsx';
import Chat from './chat.jsx';


class App extends Component {

  componentDidUpdate() {
     if(this.props.user) {
       addOnlineUser(this.props.user);
       Session.set('userId', Meteor.userId())
     } else {
       removeOnlineUser();
     }
  }


  renderChat() {
    return (this.props.users.length && Session.get('regionName') && this.props.user) ?
      <Chat users={this.props.users} checkPrivate={false} messagesObj={this.props.messages}/> : null;
  }

  renderPrivateChat() {
    return (this.props.allOnlineUsers.length && this.props.user) ?
      <Chat users={this.props.allOnlineUsers} checkPrivate={true}
        update={this.updatePrivateMessObj} messagesObj={this.props.privateMessObject}/> : null;
  }

	render() {
      // --- gподумати на рахунок позбавлення привязки до сесії
		let regionSelector;
		if(this.props.user) {
			regionSelector = <RegionSelector regions={this.props.regions} />;
		}

		return(
			<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
				<div className='col-xs-12 col-sm-12 colmd-12 col-lg-12'>
					<AccountUIWrapper />
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
					{regionSelector}
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' id='chatBody'>
          <ul className='nav nav-tabs' role='tablist'>
            <li role='presentation' class='active'>
              <a href='#chat' aria-controls='chat' role='tab' data-toggle='tab'> Chat </a>
            </li>
            <li role='presentation'>
              <a href='#private' aria-controls='private' role='tab' data-toggle='tab'> PrivateMessage </a>
            </li>
            <li role='presentation' ></li>
          </ul>
          <div className='tab-content'>
            <div role='tabpanel' className='tab-pane active' id='chat'>
              {this.renderChat()}
            </div>
            <div role='tabpanel' className='tab-pane' id='private'>
              {this.renderPrivateChat()}
            </div>
          </div>
				</div>
			</div>
		)
	}
}

export default createContainer ( () => {
	return {
		regions: getRegions(),
		user: Meteor.user(),
		users: getUsersByRegion(Session.get('regionName')),
    messages: getMessagesByRegion(Session.get('regionName')),
    allOnlineUsers: getAllOnlineUsers(),
    privateMessObject: getPrivateMessage(Session.get('user1'), Session.get('user2')),
	};
}, App);
