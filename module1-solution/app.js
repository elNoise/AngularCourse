(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('MyFirstControlla', MyFirstControlla);

MyFirstControlla.$inject = ['$scope'];
function MyFirstControlla($scope){

  $scope.items = "";
  $scope.list=[];


$scope.checkIf = function(){

if ($scope.list.length == 0 ){
  $scope.name="Please enter data first";
}

$scope.list=$scope.list.split(',');

if ($scope.list.length <= 3){

    $scope.name = "Enjoy";
  }
else{
    $scope.name = "Too much!";
}

};







};
})();
