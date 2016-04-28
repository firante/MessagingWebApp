import {getFormetedDate} from './support.jsx'

import {regions, onlineUsers, PrivateMessage, messages} from './collections.jsx';

/*
* libs methods for handle events for get data from db
*/

// methos for get region list if user is logged
export function getRegions() {
  if(Meteor.user()) {
    Meteor.subscribe('regions');
  }
  return regions.find().fetch();
}

// methos for get users in region if user is logged
export function getUsersByRegion(region) {
  if(Meteor.user()) {
    Meteor.subscribe('onlineUsers');
  }
  return onlineUsers.find({'regions': region}).fetch();
}

// methos for get message in region if user is logged
export function getMessagesByRegion(region) {
  if(Meteor.user()) {
    Meteor.subscribe('messages');
  }
  return messages.findOne({'regionName': region});
}

// methos for get all online users if user is logged
export function getAllOnlineUsers() {
  if(Meteor.user()) {
    Meteor.subscribe('onlineUsers');
  }
  return onlineUsers.find().fetch();
}

// methos for get private message for two users if user is logged
export function getPrivateMessage(user1, user2) {
  Meteor.subscribe('PrivateMessage', user1, user2);
  return PrivateMessage.findOne({'userPair': {$all: [user1, user2]}});
}
