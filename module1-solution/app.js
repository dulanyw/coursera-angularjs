(function (){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchText = "";
  $scope.checkText = "";
  
  $scope.lunchChecker = function () {
  	//return "3";
  	//return $scope.lunchText.split(',').length;
    var lunchLength = $scope.lunchText.split(',').length;
    if (lunchLength > 3) {
    	$scope.checkText = "Too much!";
    } else if (lunchLength >= 1 && $scope.lunchText != "") {
    	$scope.checkText = "Enjoy";
    } else {
    	$scope.checkText = "Please enter data first.";
    }
  };
}

})();