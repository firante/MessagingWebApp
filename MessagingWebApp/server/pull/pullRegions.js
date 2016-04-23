import { Meteor } from 'meteor/meteor';

export default class Support {

	pullRegions() {
		if(regionsCount.thisCounter === 0) {
			regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Lviv'});
			regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Kiev'});
			regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Brody'});
			regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Pidkamin'});
			regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Poltava'});
		}
	}
} 
