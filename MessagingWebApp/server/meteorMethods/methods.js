/*
* file for initialize Meteor.methods for manipulate databases
* insert, update, remove
*/

import {regions, onlineUsers, PrivateMessage, messages} from '../../imports/api/collections.jsx';
import {getFormetedDate} from '../support/support.js'

Meteor.methods({
  // methos to change logged user name
  changeUserName:function(userId, username){
    Meteor.users.update(userId, {$set: {'username': username}});
  },

  // methos to change logged user email
  changeEmail: function(userId, email) {
    Meteor.users.update(userId, {$set: {'emails.0.address': email}});
  },

  // methos to create private chat two users, if this not exsist
  openPrivateChat: function(user1, user2) {
    if(PrivateMessage.find({'userPair': {$all: [user1, user2]}}).count() === 0) {
      PrivateMessage.insert({'userPair': [user1, user2], 'messages': []});
    }
  },

  // methos to save all-chat messages to base
  sendMessage: function(regionId, message, username) {
    messages.update(regionId, {$push: {'messages': {'user':username, 'date': getFormetedDate(), 'message':message}}});
  },

  // methos to save private chat messages two users to base
  sendPrivateMessage: function (privateId, message, username) {
    PrivateMessage.update(privateId, {$push: {'messages': {'user': username, 'date': getFormetedDate(), 'message': message}}});
  },

  // methos to change user region place and create region all chat if this not exist
  openRegion: function(userId, regionId, regionName) {
    onlineUsers.update(userId, {$set: {'regions':regionName}});

    if(messages.find({_id: regionId}).count() === 0) {
      messages.insert({_id: regionId, 'regionName': regionName, 'messages': []});
    }
  },

  // methos to add online user if this not exsist
  addOnlineUser: function(user) {
    if(onlineUsers.find({_id: user._id}).count() === 0) {
      onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':'', 'verifyOnline': new Date().getTime()});
    }
  },

  // methos to remove online user if him logout
  removeOnlineUser: function(userId) {
    onlineUsers.remove({'_id': userId});
  },

  // methos to confirmation user online status
  confirmOnline: function(user) {
    if(onlineUsers.find({_id: user._id}).count() !== 0) {
      onlineUsers.update({_id:user._id}, {$set: {'verifyOnline' : new Date().getTime()}})
    }
  }
});
