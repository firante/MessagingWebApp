import {getFormetedDate} from './support.jsx'

export function getRegions() {
  return regions.find().fetch();
}


export function getUsersByRegion(region) {
  return onlineUsers.find({'regions': region}).fetch();
}

export function getMessagesByRegion(region) {
  return messages.findOne({'regionName': region});
}


export function getAllOnlineUsers() {
  return onlineUsers.find().fetch();
}

export function getPrivateMessage(user1, user2) {
  Meteor.subscribe('PrivateMessage',user1, user2);
  return PrivateMessage.findOne({'userPair': {$all: [user1, user2]}});
}
