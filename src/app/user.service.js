export class User {
  constructor($http, $log) {
    'ngInject';
    this.$http = $http;
    this.$log = $log;
    this._user = {};
  }

  get user() {
    return this._user;
  }

  set user(value) {
    this._user = value;
    this.$log.info(value);
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
      return randomPerson;
    }, err => {
      this.$log.error(err);
      throw err;
    });
  }
}
