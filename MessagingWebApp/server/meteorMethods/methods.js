import {getFormetedDate} from '../support/support.js'

Meteor.methods({
  changeUserName:function(userId, username){
    Meteor.users.update(userId, {$set: {'username': username}});
  },

  changeEmail: function(userId, email) {
    Meteor.users.update(userId, {$set: {'emails.0.address': email}});
  },

  openPrivateChat: function(user1, user2) {
    if(PrivateMessage.find({'userPair': {$all: [user1, user2]}}).count() === 0) {
      PrivateMessage.insert({'userPair': [user1, user2], 'messages': []});
    }
  },

  sendMessage: function(regionId, message, username) {
    messages.update(regionId, {$push: {'messages': {'user':username, 'date': getFormetedDate(), 'message':message}}});
  },

  sendPrivateMessage: function (privateId, message, username) {
    PrivateMessage.update(privateId, {$push: {'messages': {'user': username, 'date': getFormetedDate(), 'message': message}}});
  },

  openRegion: function(userId, regionId, regionName) {
    onlineUsers.update(userId, {$set: {'regions':regionName}});

    if(messages.find({_id: regionId}).count() === 0) {
      messages.insert({_id: regionId, 'regionName': regionName, 'messages': []});
    }
  },
  addOnlineUser: function(user) {
    if(onlineUsers.find({_id: user._id}).count() === 0) {
      onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':'', 'verifyOnline': new Date().getTime()});
    }
  },

  removeOnlineUser: function(userId) {
    onlineUsers.remove({'_id': userId});
  },

  confirmOnline: function(user) {
    if(onlineUsers.find({_id: user._id}).count() !== 0) {
      onlineUsers.update({_id:user._id}, {$set: {'verifyOnline' : new Date().getTime()}})
    }
  }
});
