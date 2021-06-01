angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      BOOK: {
        RETURN: 'Atrás',
        COVER: 'Portada',
        AUTHOR: 'Autor del libro',
        PUBLISHER: 'Editorial',
        YEAR: 'Año de publicación',
        BADGE: 'Insignia'
      }
    });

    $translateProvider.translations('en', {
      BOOK: {
        RETURN: 'Return',
        COVER: 'Cover',
        AUTHOR: 'Author of the book',
        PUBLISHER: 'Editorial',
        YEAR: 'year of publication',
        BADGE: 'Insignia'
      }
    });
  }
]);
