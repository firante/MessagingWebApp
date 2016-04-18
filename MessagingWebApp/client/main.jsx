import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../lib/ui/App.jsx';

Meteor.startup(() => {
	
	render(<App />, document.getElementById('container'));



});

while(Meteor.user() == 'undefined') {
		console.log(Meteor.user());
	}
	console.log(Meteor.user());

