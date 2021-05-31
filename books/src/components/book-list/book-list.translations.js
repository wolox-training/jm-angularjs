angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      BOOKLIST: {
        SEARCH: 'Buscá por título del libro...',
        COVER: 'Portada'
      }
    });

    $translateProvider.translations('en', {
      BOOKLIST: {
        SEARCH: 'Search by book title..',
        COVER: 'Cover'
      }
    });
  }
]);
