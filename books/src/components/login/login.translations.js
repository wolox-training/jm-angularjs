angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      LOGIN: {
        RETURN: 'Atrás'
      }
    });

    $translateProvider.translations('en', {
      LOGIN: {
        RETURN: 'Return'
      }
    });
  }
]);
