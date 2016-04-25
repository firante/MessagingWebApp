export function openRegion(regionId, regionName, username) {
  onlineUsers.update({'_id': Meteor.user()._id}, {'username':username, 'regions':regionName});

  if(messages.find({_id: regionId}).count() === 0) {
    messages.insert({_id: regionId, 'regionName': regionName, 'messages': []});
  }
}

export function getRegions() {
  return regions.find().fetch();
}

export function addOnlineUser(user) {
  if(onlineUsers.find({_id: user._id}).count() === 0) {
    onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':''});
  }
}

export function removeOnlineUser() {
  onlineUsers.remove({'_id': Session.get('userId')});
  delete Session.keys.userId;
}

export function getUsersByRegion(region) {
  return onlineUsers.find({'regions': region}).fetch();
}

export function getMessagesByRegion(region) {
  return messages.findOne({'regionName': region});
}
