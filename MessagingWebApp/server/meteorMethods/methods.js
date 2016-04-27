import {onlineUsers} from '../collections/collections.js';
import {PrivateMessage} from '../collections/collections.js';
import {messages} from '../collections/collections.js';

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

  sendPrivateMessage: function () {
    PrivateMessage.update(privateId, {$push: {'messages': {'user': username, 'date': getFormetedDate(), 'message': message}}});
  },

  openRegion: function(userId, regionId, regionName) {
    onlineUsers.update(userId, {$set: {'regions':regionName}});

    if(messages.find({_id: regionId}).count() === 0) {
      messages.insert({_id: regionId, 'regionName': regionName, 'messages': []});
    }
  }
});
