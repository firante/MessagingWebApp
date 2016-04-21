export default class Support {

	pullRegions() {
		try {
			if(regionsCount.thisCounter === 0) {
				regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Lviv'});
				regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Kiev'});
				regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Brody'});
				regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Pidkamin'});
				regions.insert({_id:regionsCount.next.toString(), 'regionName': 'Poltava'});
			}
		} catch(err) {
			console.log(err.message + '\n ' + err.stack);
		}
	}
} 