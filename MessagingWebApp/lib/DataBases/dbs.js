import Counter from '../mylibs/Counter'

regions = new Mongo.Collection('regions');
regionsCount = new Counter(regions.find().count());