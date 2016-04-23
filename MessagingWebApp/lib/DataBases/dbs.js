import Counter from '../mylibs/Counter'

regions = new Mongo.Collection('regions');
onlineUsers = new Mongo.Collection('onlineUsers');
regionsCount = new Counter(regions.find().count());
