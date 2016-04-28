/*
* base class for render full application
*/

import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';


import { getRegions, getUsersByRegion, getMessagesByRegion, getCurrentUserRegion,
  getAllOnlineUsers, getPrivateMessage } from '../api/events.jsx';
import RegionSelector from './regionSelector.jsx';
import Chat from './chat.jsx';
import {regions, onlineUsers, PrivateMessage, messages} from '../api/collections.jsx';

class App extends Component {

  componentDidUpdate() {
     if(this.props.user) {
       Meteor.call('addOnlineUser', this.props.user); // add online user after logged
       Session.set('userId', Meteor.userId())
     } else {
       Meteor.call('removeOnlineUser',Session.get('userId')); // remove online user user after loggout
       delete Session.keys.userId;
       delete Session.keys.regionName;

       // stop all subscribe
       Meteor.subscribe('messages').stop();
       Meteor.subscribe('onlineUsers').stop();
       Meteor.subscribe('regions').stop();
       PrivateMessage.subscribe('PrivateMessage').stop();
     }
  }

  // method for render public chat component
  renderChat() {
    return (this.props.users.length && Session.get('regionName') && this.props.user) ?
      <Chat users={this.props.users} checkPrivate={false} messagesObj={this.props.messages}/> : null;
  }
  // method for render private chat component
  renderPrivateChat() {
    return (this.props.allOnlineUsers.length && this.props.user) ?
      <Chat users={this.props.allOnlineUsers} checkPrivate={true} messagesObj={this.props.privateMessObject}/> : null;
  }

	render() {
      // --- gподумати на рахунок позбавлення привязки до сесії
		let regionSelector;
		if(this.props.user) {
			regionSelector = <RegionSelector regions={this.props.regions} />;  // generete region selector
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
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center'>
                <span className='lead'>{Session.get('regionName')}</span>
              </div>
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
		regions: getRegions(),  // prop regions list
		user: Meteor.user(), // prop online user
		users: getUsersByRegion(Session.get('regionName')), //prop online users in selected region
    messages: getMessagesByRegion(Session.get('regionName')), // prop public message in selected region
    allOnlineUsers: getAllOnlineUsers(), // prop all online user
    privateMessObject: getPrivateMessage(Session.get('user1'), Session.get('user2')) // prop private message pair of user
	};
}, App);
