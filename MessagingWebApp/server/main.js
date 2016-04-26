import { Meteor } from 'meteor/meteor';

import Support from './pull/pullRegions.js'

Meteor.startup(() => {
	Meteor.publish('onlineUsers', () => {
		return onlineUsers.find();
	});

	Meteor.publish('regions', () => {
		return regions.find();
	});

	Meteor.publish('messages', () => {
		return messages.find();
	});

  Meteor.publish('PrivateMessage', () => {
		return PrivateMessage.find();
	});

	new Support().pullRegions();
  // code to run on server at startup
	onlineUsers.find().forEach((value) => {
		if(parseInt(value.verifyOnline)+5000 < new Date().getTime()) {
			onlineUsers.remove({_id: value._id});
		}
	});

  Meteor.setInterval(function(){
     onlineUsers.find().forEach((value) => {
       if(parseInt(value.verifyOnline)+5000 < new Date().getTime()) {
         onlineUsers.remove({_id: value._id});
       }
     });
  }, 121000);

});
