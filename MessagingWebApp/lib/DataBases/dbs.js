import Counter from '../mylibs/Counter'

regions = new Mongo.Collection('regions');
onlineUsers = new Mongo.Collection('onlineUsers');
PrivateMessage = new Mongo.Collection('PrivateMessage');
messages = new Mongo.Collection('messages');

regionsCount = new Counter(regions.find().count());
