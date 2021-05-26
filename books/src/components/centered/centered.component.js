const angular = require('angular');

angular.module('app-bootstrap').component('centered', {
  template: require('./centered.html'),
  controller: [function () {
    this.logo = require('./../../assets/wolox_logo.svg');
    this.title = 'Welcome to AngularJS Bootstrap!';
    this.name = 'AngularJS component';
  }]
});
