export const emailContainer = {
  template: require('./emailContainer.html'),
  controller($http, $log, User) {
    this.emails = ['king0120@gmail.com', '1234@aol.com'];

    User.getUser().then(() => {
      this.user = User.user;
      this.emails.push(this.user.email);
    });

    this.editEmail = email => {
      if (!email) {
        email = this.newEmail;
      }
      $log.info(email);
      this.user.email = email;
    };
  }
};
