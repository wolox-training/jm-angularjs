const angular = require('angular');

angular.module('app-bootstrap').component('signUp', {
  template: require('./sign-up.html'),
  controller: [function () {

    this.confirmPattern = '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$';

    function validateControls(form) {
      for (var control of form.$$controls) {
        control.$setTouched();
      }
    }

    this.signUp = (form) => {
      validateControls(form);
      if (form.$valid) {
        console.log(form);
      }
    };

  }]
});
