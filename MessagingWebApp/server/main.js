import { Meteor } from 'meteor/meteor';

import Support from './pull/pullRegions.js'

Meteor.startup(() => {
	Meteor.publish('onlineUsers', () => {
		return onlineUsers.find();
	});

	Meteor.publish('regions', () => {
		return regions.find();
	});



	new Support().pullRegions();
  // code to run on server at startup
});
