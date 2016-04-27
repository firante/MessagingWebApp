import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import { confirmOnline } from '../imports/api/events.jsx';

import '../imports/startup/account-config.js';

Meteor.startup( () => {

  Session.set('user2', null);
  Session.set('user1', null);


  Meteor.subscribe('onlineUsers');
  Meteor.subscribe('regions');
  Meteor.subscribe('messages');

  render ( <App />, document.getElementById('container') );


  setInterval(function() {
    if(Meteor.user()) {
      Meteor.call('confirmOnline', Meteor.user());
    }
  }, 60000);

});
