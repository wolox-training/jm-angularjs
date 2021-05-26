const angular = require('angular');

angular.module('app-bootstrap').component('component2', {
  template: require('./component2.html'),
  controller: [function () {
    this.component2Phrase = 'This is component 2';
  }]
});
