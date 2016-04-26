import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';
import RegionSelector from '../imports/ui/regionSelector.jsx';
import RegionElement from '../imports/ui/RegionElement.jsx';
import { confirmOnline } from '../imports/api/events.jsx';

import '../imports/startup/account-config.js';

Meteor.startup( () => {

  Session.set('user2', null);
  Session.set('user1', null);


  Meteor.subscribe('onlineUsers');
  Meteor.subscribe('regions');
  Meteor.subscribe('messages');
  Meteor.subscribe('PrivateMessage');
  render ( <App />, document.getElementById('container') );


  setInterval(function() {
    if(Meteor.user()) {
      confirmOnline(Meteor.user());
    }
  }, 60000);

});
