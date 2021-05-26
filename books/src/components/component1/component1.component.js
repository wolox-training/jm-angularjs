const angular = require('angular');

angular.module('app-bootstrap').component('component1', {
  template: require('./component1.html'),
  controller: ['anyService', function (anyService) {
    this.component1Phrase = anyService.getMessage();
  }]
});
