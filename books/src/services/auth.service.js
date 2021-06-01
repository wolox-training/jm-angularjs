const angular = require('angular');

angular.module('app-bootstrap').factory('authService', ['$q', 'localStorageService',
  function($q, localStorageService) {
    return {
      authenticated: false,
      auth: (token) => {
        this.authenticated = true;
        return this.$get().saveToken(token);
      },
      saveToken: (token) => {
        return localStorageService.set('access_token', token);
      },
      getToken: () => {
        let token = localStorageService.get('access_token');
        this.$get().authenticated = !!token;
        return token;
      },
      isAuthenticated: () => {
        if (this.$get().getToken()) {
          return true;
        } else {
          return $q.reject('Not Authenticated');
        }
      },
      isAnonymous: () => {
        if (this.$get().getToken()) {
          return $q.reject('Authenticated');
        } else {
          return true;
        }
      }
    };
  }
]);
