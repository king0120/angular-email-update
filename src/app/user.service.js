export class User {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this._user = {};
    this._emails = ['test1@gmail.com', 'test2@gmail.com', 'test3@gmail.com'];
  }

  get user() {
    return this._user;
  }
  set user(value) {
    this.$log.info(value);
    this._user = value;
  }

  get emails() {
    return this._emails;
  }
  set emails(value) {
    this.$log.info(value);
    this._emails = value;
  }

  getUser() {
    return this.$http({
      method: 'GET',
      url: 'https://randomuser.me/api/',
      params: {
        nat: 'us',
        exc: 'id,login,registered'
      }
    }).then(resp => {
      const randomPerson = resp.data.results[0];
      this.$log.info(randomPerson);
      this.user = randomPerson;
      this.emails.push(randomPerson.email);
      return randomPerson;
    }, err => {
      this.$log.error(err);
      throw err;
    });
  }

  newEmail(email) {
    this.user.email = email;
    this.emails.push(email);
  }
}
