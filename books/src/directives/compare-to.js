const angular = require('angular');

angular.module('app-bootstrap').directive('compareTo',
  function () {
    return {
      require: ['ngModel'],
      scope: {
        otherModelValue: '=compareTo'
      },
      link: function postLink(scope, element, attrs, ngModel) {
        ngModel[0].$validators.compareTo = function(modelValue) {
          if (scope.$parent.$ctrl.compare === undefined) {
            return true;
          }
          return modelValue === scope.otherModelValue;
        };
        scope.$watch('otherModelValue', function() {
            ngModel[0].$validate();
        });
      }
    };
});
