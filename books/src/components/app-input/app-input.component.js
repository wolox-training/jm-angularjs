const angular = require('angular');

angular.module('app-bootstrap').component('appInput', {
  template: require('./app-input.html'),
  bindings: {
    form: '<',
    model: '<',
    name: '@',
    label: '@',
    type: '@'
  },
  controller: [function () {

  }]
});
