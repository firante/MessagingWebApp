export default class ActiveUser {
  constructor(user) {
    if (typeof user === 'undefined') {
			this.user = 0;
		} else {
			this.user = user;
		}
  }

  set setUser(user) {
    this.user = user;
  }

  get getUser() {
    return this.user;
  }
 }
