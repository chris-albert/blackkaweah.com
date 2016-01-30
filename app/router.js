import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('music');
  this.route('video');
  this.route('contact');
  this.route('donate');
});

export default Router;
