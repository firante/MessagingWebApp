export function openRegion(regionName) {
  onlineUsers.update({'_id': Meteor.user()._id}, {'regions':regionName});
}

export function getRegions() {
  return regions.find().fetch();
}

export function addOnlineUser(user) {
  Meteor.subscribe('onlineUsers');
  if(onlineUsers.find({_id: user._id}).count() === 0) {
    onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':''});
  }
  Session.set('onlineUserId', user._id);
}

export function removeOnlineUser() {
  if(Session.get('onlineUserId')) {
    onlineUsers.remove({_id: Session.get('onlineUserId')});
  }
}
