import Counter from '../mylibs/Counter'

regions = new Mongo.Collection('regions');
onlineUsers = new Mongo.Collection('onlineUsers');
messages = new Mongo.Collection('messages');
PrivateMessage = new Mongo.Collection('PrivateMessage');

regionsCount = new Counter(regions.find().count());
