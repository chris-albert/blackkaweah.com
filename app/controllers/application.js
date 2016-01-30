import Ember from 'ember';

export default Ember.Controller.extend({
  redirect: function() {
    this.transitionTo('music');
  }
});
