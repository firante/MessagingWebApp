import { Meteor } from 'meteor/meteor';

import Support from './pull/pullRegions.js'

Meteor.startup(() => {
	new Support().pullRegions();

	console.log(regionsCount.thisCounter)

	Meteor.publish('regions', () => {
		return regions.find();
	});
  // code to run on server at startup
});
