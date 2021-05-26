const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: [function () {

    function validateControls(form) {
      for (var control of form.$$controls) {
        control.$setTouched();
      }
    }

    this.login = (form) => {
      validateControls(form);
      if (form.$valid) {
        console.log(form);
      }
    };

  }]
});
