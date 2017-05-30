(function() {
  'use strict';
  angular.module('itemCalc', [])
  .controller('lunchCheckController', ['$scope' , LunchCheckController]);
  function LunchCheckController($scope){
    $scope.items = "";
    $scope.result = "";
    $scope.itemColor = "black";
    $scope.checkLunch = function(){
      if($scope.items == "")
      {
        $scope.result = "Please enter data first";
        $scope.itemColor = "red";
        return;
      }
      var items =   $scope.items.split(",").length;
      if(items <= 3)
        $scope.result = "Enjoy!";
      else if(items > 3)
        $scope.result = "Too much!";
      $scope.itemColor = "green";
    }
  }
})();
