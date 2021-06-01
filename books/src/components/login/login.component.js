const angular = require('angular');

angular.module('app-bootstrap').component('login', {
  template: require('./login.html'),
  controller: ['userService', '$state', 'authService',
    function (userService, $state, authService) {
      this.user = {};
      this.error = '';
      this.loading = false;

      function validateControls(form) {
        for (var control of form.$$controls) {
          control.$setTouched();
        }
      }

      this.login = (form) => {
        this.error = '';
        validateControls(form);
        if (form.$valid) {
          this.loading = true;
          userService.signIn(this.user).then((response) => {
            authService.auth(response.headers('Access-token'));
            $state.go('bookList');
          }, (error) => {
            this.error = error.data.errors.join(', ');
          }).finally(() => {
            this.loading = false;
          });
        }
      };

    }]
});
