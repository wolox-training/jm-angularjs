angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      INPUT: {
        REQUIRED: 'Este campo es obligatorio',
        EMAIL: 'No es un correo valido: example@dom.com'
      }
    });

    $translateProvider.translations('en', {
      INPUT: {
        REQUIRED: 'This field is required',
        EMAIL: 'This is not a valid email: example@dom.com'
      }
    });
  }
]);
