export const emailContainer = {
  template: require('./emailContainer.html'),
  controller($http, $log, User) {
    $log.info(User);

    User.getUser().then(() => {
      this.user = User.user;
    });

    this.editEmail = () => {
      $log.info(this.newEmail);
      this.user.email = this.newEmail;
    };
  }
};
