const angular = require('angular');

angular.module('app-bootstrap').factory('anyService', [
  function() {
    const message = 'data from service';

    return {
      getMessage: () => message
    };
  }
]);
