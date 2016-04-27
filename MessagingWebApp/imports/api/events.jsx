import {getFormetedDate} from './support.jsx'

export function getRegions() {
  if(Meteor.user()) {
    Meteor.subscribe('regions');
  }
  return regions.find().fetch();
}


export function getUsersByRegion(region) {
  if(Meteor.user()) {
    Meteor.subscribe('onlineUsers');
  }
  return onlineUsers.find({'regions': region}).fetch();
}

export function getMessagesByRegion(region) {
  if(Meteor.user()) {
    Meteor.subscribe('messages');
  }
  return messages.findOne({'regionName': region});
}


export function getAllOnlineUsers() {
  if(Meteor.user()) {
    Meteor.subscribe('onlineUsers');
  }
  return onlineUsers.find().fetch();
}

export function getPrivateMessage(user1, user2) {
  Meteor.subscribe('PrivateMessage', user1, user2);
  return PrivateMessage.findOne({'userPair': {$all: [user1, user2]}});
}
