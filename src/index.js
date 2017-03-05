import angular from 'angular';
import $ from 'jquery';
import {emailContainer} from './app/email-container/emailContainer';
import {nav} from './app/nav/nav';
import {User} from './app/user.service';

// require('../node_modules/bootstrap-sass/assets/javascripts');

import './index.scss';

export const app = 'app';

angular
  .module(app, [])
  .component('app', emailContainer)
  .component('nav', nav)
  .service('User', User)
  .filter('capitalize', () => {
    return token => {
      return token.charAt(0).toUpperCase() + token.slice(1);
    };
  });
