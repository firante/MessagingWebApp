import Counter from '../mylibs/Counter'

regions = new Mongo.Collection('regions');

messages = new Mongo.Collection('messages');


regionsCount = new Counter(regions.find().count());
