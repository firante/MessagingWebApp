/*
* method to update overflows div-messages scroll to bottom
*/
export function updateScroll() {
  let element = document.getElementById('div_mes');
  element.scrollTop = element.scrollHeight;
}

/*
* class counter for create counters for generate ID
*/

export class Counter {
	constructor (count) {
		if (typeof count === 'undefined') {
			this.count = 0;
		} else {
			this.count = count;
		}
	}

	get next() {
		return this.count += 1;
	}

	get previous() {
		return this.count -= 1;
	}

	set setCount(count) {
		try {
			if(typeof count === 'number') {
				this.count = count;
			} else if (typeof count === 'string') {
				this.count = parseInt(count, 10);
			} else {
				throw new Error("Invalid argument type! Need number!")
			}
		} catch(err) {

		}
	}

	get thisCounter() {
		return this.count;
	}
}
