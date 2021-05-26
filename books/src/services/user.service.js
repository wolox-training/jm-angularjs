const angular = require('angular');

angular.module('app-bootstrap').factory('userService', ['$http',
  function($http) {
    const apiUrl = 'https://books-training-rails.herokuapp.com/api/v1';
    const path = 'users';

    return {
      signIn: (user) =>
        $http.post(`${apiUrl}/${path}'/sign_in'`, user).then((response) => response),
      signUp: (user) =>
        $http.post(`${apiUrl}/${path}'/sign_up'`, user).then((response) => response)
    };
  }
]);
