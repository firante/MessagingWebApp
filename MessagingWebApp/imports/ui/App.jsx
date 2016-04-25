import React, {Component, PropTypes} from 'react';
import AccountUIWrapper from './AccountsUIWrapper.jsx';
import {createContainer} from 'meteor/react-meteor-data';


import { getRegions, addOnlineUser, removeOnlineUser, openRegion,
  getUsersByRegion, getMessagesByRegion } from '../api/events.jsx';
import RegionSelector from './regionSelector.jsx';
import Chat from './chat.jsx';

class App extends Component {

  renderChat() {
    if(this.props.users && this.props.messages) {
      return <Chat users={this.props.users} messagesObj={this.props.messages} />;
    } else {
        return null;
    }
  }

	render() {
		let regionSelector;
		          // --- gподумати на рахунок позбавлення привязки до сесії
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

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 text-right'>
					{regionSelector}
				</div>

				<div className='col-xs-12 col-sm-12 col-md-12 col-lg-12' id='chatBody'>
					{this.renderChat()}
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
    messages: getMessagesByRegion(Session.get('regionName'))
	};
}, App);
