import { Meteor } from 'meteor/meteor';

import support from './pull/pullRegions.js'

Meteor.startup(() => {
	console.log(typeof new support);


	Meteor.publish('regions', () => {
		return regions.find();
	});
  // code to run on server at startup
});
