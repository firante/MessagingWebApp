import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';


import { getRegions, addOnlineUser, removeOnlineUser, openRegion,
  getUsersByRegion, getMessagesByRegion, getCurrentUserRegion, sendMessage,
  getAllOnlineUsers, createPrivateChat, getPrivateMessage, sendPrivateMessage } from '../api/events.jsx';
import RegionSelector from './regionSelector.jsx';
import Chat from './chat.jsx';


class App extends Component {

  renderChat() {
    return (this.props.users.length && Session.get('regionName') && this.props.user) ?
      <Chat users={this.props.users} messagesObj={this.props.messages} onClick={sendMessage}/> : null;
  }

  renderPrivateChat() {
    return (this.props.allOnlineUsers.length && this.props.user) ?
      <Chat users={this.props.allOnlineUsers} onDoubleClick={createPrivateChat}
        update={this.updatePrivateMessObj} messagesObj={this.props.privateMessObject} onClick={sendPrivateMessage}/> : null;
  }

	render() {
      // --- gподумати на рахунок позбавлення привязки до сесії
		let regionSelector;
		if(this.props.user) {
			regionSelector = <RegionSelector regions={this.props.regions} onClick={openRegion}/>;
			setTimeout(()=>{
				if(onlineUsers.find({_id: this.props.user._id}).count() < 1) {
					this.activeUser = this.props.user._id;
					addOnlineUser(this.props.user);
				}
        Session.set('userId', this.props.user._id);
			}, 500);
		} else {
		  removeOnlineUser();
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
