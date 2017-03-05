import angular from 'angular';
import angularUiBootstrap from 'angular-ui-bootstrap';
import {emailContainer} from './app/email-container/emailContainer';
import {emailUpdate} from './app/email-update/emailUpdate';
import {nav} from './app/nav/nav';
import {User} from './app/user.service';

// require('../node_modules/bootstrap-sass/assets/javascripts');

import './index.scss';

export const app = 'app';

angular
  .module(app, [
    angularUiBootstrap
  ])
  .component('app', emailContainer)
  .component('update', emailUpdate)
  .component('nav', nav)
  .service('User', User)
  .filter('capitalize', () => {
    return token => {
      return token ? token.charAt(0).toUpperCase() + token.slice(1) : '';
    };
  });
