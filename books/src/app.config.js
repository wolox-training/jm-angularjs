const angular = require('angular');

angular.module('app-bootstrap', []).config([
  'localStorageServiceProvider',
  function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix(window.btoa('app-bootstrap-/* @echo environment */'));
  }
]);
