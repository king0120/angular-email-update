export const emailContainer = {
  template: require('./emailContainer.html'),
  controller: ['$http', '$log', 'User', EmailContainerController]
};

function EmailContainerController($http, $log, User) {
  User.getUser().then(() => {
    this.user = User.user;
  });
}
