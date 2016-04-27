import {getFormetedDate} from './support.jsx'

export function getRegions() {
  return regions.find().fetch();
}

export function addOnlineUser(user) {
  if(onlineUsers.find({_id: user._id}).count() === 0) {
    onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':'', 'verifyOnline': new Date().getTime()});
  }
}

export function confirmOnline (user) {
  if(onlineUsers.find({_id: user._id}).count() !== 0) {
    onlineUsers.update({_id:user._id}, {$set: {'verifyOnline' : new Date().getTime()}})
  }
}

export function removeOnlineUser() {
  onlineUsers.remove({'_id': Session.get('userId')});
  delete Session.keys.userId;
  delete Session.keys.regionName;
}

export function getUsersByRegion(region) {
  return onlineUsers.find({'regions': region}).fetch();
}

export function getMessagesByRegion(region) {
  return messages.findOne({'regionName': region});
}
 export function sendMessage (regionId, message, username) {
   messages.update({_id: regionId}, {$push: {'messages': {'user':username, 'date': getFormetedDate(), 'message':message}}});
 }

export function getAllOnlineUsers() {
  return onlineUsers.find().fetch();
}

export function getPrivateMessage(user1, user2) {
  return PrivateMessage.findOne({'userPair': {$all: [user1, user2]}});
}
