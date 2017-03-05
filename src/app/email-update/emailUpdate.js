export const emailUpdate = {
  template: require('./emailUpdate.html'),
  controller($log, User) {
    this.emails = User.emails;

    this.updateFromPrevEmail = () => {
      User.user.email = this.selected;
      this.selected = '';
      this.invalid = '';
    };

    this.submit = () => {
      const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;

      const validEmail = this.newEmail.match(emailRegEx);

      if (!validEmail) {
        this.invalid = `${this.newEmail} is not a valid e-mail address`;
      } else if (this.emails.includes(this.newEmail)) {
        this.invalid = `${this.newEmail} is already a previous e-mail address`;
      } else {
        User.newEmail(this.newEmail);
        this.newEmail = '';
        this.invalid = '';
      }
    };
  }
};
