/*
* registration all collection how we was need
* calculate regions count
*/

import {Counter} from './support.jsx'
import {Mongo} from 'meteor/mongo';

export const regions = new Mongo.Collection('regions');
export const onlineUsers = new Mongo.Collection('onlineUsers');
export const PrivateMessage = new Mongo.Collection('PrivateMessage');
export const messages = new Mongo.Collection('messages');

export const regionsCount = new Counter(regions.find().count());
