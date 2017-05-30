(function() {
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function($scope, $filter, $injector){
    $scope.name = "";
    $scope.result = 0;
    $scope.displayNumeric = function() {
      var totalValue = calculateNumericForString($scope.name);
      $scope.result = totalValue;
    };
    $scope.makeUpper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
    

    function calculateNumericForString(val){
      var totalStringValue = 0;
      for (var i = 0; i < val.length; i++) {
        totalStringValue += val.charCodeAt(i);
      }
      return totalStringValue;
    }
  });
})();
