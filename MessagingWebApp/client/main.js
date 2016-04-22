import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js'
import App from '../imports/ui/App.jsx';
import RegionSelector from '../imports/ui/regionSelector.jsx';
import RegionElement from '../imports/ui/RegionElement.jsx';

Meteor.startup(() => {

    Meteor.subscribe('regions');
	render (<App />, document.getElementById('container'));

	var interval = setInterval(function() {
		if(Meteor.user()) {
			render(<RegionSelector />, document.getElementById('regions'));
			clearInterval(interval);
		}
	}, 100)

});


