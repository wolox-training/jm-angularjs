const angular = require('angular');

angular.module('app-bootstrap').factory('userService', ['$http',
  function($http) {
    const apiUrl = process.env.API_URL + '/users';

    return {
      signIn: (user) =>
        $http.post(`${apiUrl}/sign_in`, user).then((response) => response),
      signUp: (user) =>
        $http.post(`${apiUrl}/sign_up`, user).then((response) => response)
    };
  }
]);
