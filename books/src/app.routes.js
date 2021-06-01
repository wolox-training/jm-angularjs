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
        component: 'bookList'
      }).state('book',
      {
        url: '/:id',
        component: 'book'
      }).state('login',
      {
        url: '/login',
        component: 'login'
      }).state('signUp',
      {
        url: '/sign-up',
        component: 'signUp'
      });
    $urlRouterProvider.otherwise('/');
  }
]);

angular.module('app-bootstrap').run(['$transitions',
  function ($transitions) {
    $transitions.onBefore({ from: 'home' }, transition => {
      // eslint-disable-next-line no-console
      console.log('Route changed, use ransition.abort(); for abort if you need', transition);
    });
  }
]);
