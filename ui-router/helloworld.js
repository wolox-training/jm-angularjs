var myApp = angular.module('helloworld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>Hello world!</h3>'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  $stateProvider
    .state('contacts', {
        abstract: true,
        url: '/contacts',
        templateUrl: 'contacts.html',
        controller: function($scope){
            $scope.contacts = [{ id:0, name: "Alice" }, { id:1, name: "Bob" }];
        }    		
    })
    .state('contacts.list', {
        url: '/list',
        templateUrl: 'contacts.list.html'
    })
    .state('contacts.detail', {
        url: '/:id',
        templateUrl: 'contacts.detail.html',
        controller: function($scope, $stateParams){
          $scope.person = $scope.contacts[$stateParams.id];
        }
    })
});