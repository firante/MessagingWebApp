export function openRegion(regionName, username) {
  onlineUsers.update({'_id': Meteor.user()._id}, {'username':username, 'regions':regionName});
}

export function getRegions() {
  return regions.find().fetch();
}

export function addOnlineUser(user) {
  Meteor.subscribe('onlineUsers');
  if(onlineUsers.find({_id: user._id}).count() === 0) {
    onlineUsers.insert({_id: user._id, 'username': user.username, 'regions':''});
  }
}

export function removeOnlineUser(userId) {
  console.log(userId);
  if(userId) {
    onlineUsers.remove({'username': userId});
  }
}

export function getUsersByRegion(region) {
  return onlineUsers.find({'regions': region}).fetch();
}
