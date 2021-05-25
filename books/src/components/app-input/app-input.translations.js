angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      INPUT: {
        REQUIRED: 'Este campo es obligatorio',
        EMAIL: 'No es un correo valido: example@dom.com',
        MIN: 'Los caracteres deben ser igual o mayor a',
        MAX: 'Los caracteres deben ser igual o menor a',
        COMPARE: 'Las contraseñas no coinciden'
      }
    });

    $translateProvider.translations('en', {
      INPUT: {
        REQUIRED: 'This field is required',
        EMAIL: 'This is not a valid email: example@dom.com',
        MIN: 'Characters must be equal to or greater than',
        MAX: 'Characters must be equal to or less than',
        COMPARE: 'Passwords do not match'
      }
    });
  }
]);
