class PartyPlanner {
	constructor(guestList) {
		this.guestList = [];
	}
	addToGuestList(name) {
		return this.guestList.push(name)
	}
	throwParty () {
		if(this.guestList.length > 0) {
			let string = `Welcome to the party ${this.guestList[0]}`
			for(let i = 1; i < this.guestList.length; i++) {
				string += ` and ${this.guestList[i]}`
			}
			return string
		}
		else {
			return "Gotta add people to the guest list"
		}
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
