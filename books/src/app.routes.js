const angular = require('angular');

angular.module('app-bootstrap').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        component: 'centered'
      }).state('component1',
      {
        url: '/component1',
        component: 'component1'
      }).state('component2',
      {
        url: '/component2',
        component: 'component2'
      }).state('bookList',
      {
        url: '/list',
        component: 'bookList',
        resolve: {
          auth: function(authService) {
            return authService.isAuthenticated();
          }
        }
      }).state('book',
      {
        url: '/:id',
        component: 'book',
        resolve: {
          auth: function(authService) {
            return authService.isAuthenticated();
          }
        }
      }).state('login',
      {
        url: '/login',
        component: 'login',
        resolve: {
          auth: function(authService) {
            return authService.isAnonymous();
          }
        }
      }).state('signUp',
      {
        url: '/sign-up',
        component: 'signUp',
        resolve: {
          auth: function(authService) {
            return authService.isAnonymous();
          }
        }
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions', '$state',
  function ($transitions, $state) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });

    // If the route change failed due to authentication error, redirect them out
    $state.defaultErrorHandler(function(error) {
      if (error.detail === 'Not Authenticated') {
        $state.go('login');
      } else if (error.detail === 'Authenticated') {
        $state.go('bookList');
      }
    });
  }
]);
