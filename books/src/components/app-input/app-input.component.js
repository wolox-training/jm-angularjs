const angular = require('angular');

angular.module('app-bootstrap').component('appInput', {
  template: require('./app-input.html'),
  bindings: {
    form: '<',
    model: '<',
    name: '@',
    label: '@',
    type: '@',
    min: '@',
    max: '@',
    compare: '<',
    pattern: '<',
    patternText: '@',
    onUpdate: '&'
  },
  controller: [function () {

    this.update = function(value) {
      this.onUpdate({ value: value });
    };

  }]
});
