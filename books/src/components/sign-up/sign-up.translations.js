angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      SIGNUP: {
        NAME: 'Nombre',
        LASTNAME: 'Apellido',
        CONFIRM: 'Confirmación de Password',
        PATTERN: 'Debe tener al menos una letra y un número'
      }
    });

    $translateProvider.translations('en', {
      SIGNUP: {
        NAME: 'Name',
        LASTNAME: 'Lastname',
        CONFIRM: 'Password confirmation',
        PATTERN: 'Must have at least one letter and one number'
      }
    });
  }
]);
