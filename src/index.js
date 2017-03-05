import angular from 'angular';

import {emailContainer} from './app/email-container/emailContainer';
import {nav} from './app/nav/nav';

// require('../node_modules/bootstrap-sass/assets/javascripts');

import './index.scss';

export const app = 'app';

angular
  .module(app, [])
  .component('app', emailContainer)
  .component('nav', nav);
