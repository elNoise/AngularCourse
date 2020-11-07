(function () {
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant("ApiBasePath", "https://davids-restaurant.herokuapp.com/menu_items.json")
.directive('foundItems', foundItemsDirective);

function foundItemsDirective(){

  var ddo = {
    restrict: "E",
    templateUrl: 'foundItems.html',
    scope:{
      foundItems: '<',
      onRemove: '&'
    },
    controller: DirectiveController,
    controllerAs: 'dctrl',
    bindToController: true
  };
  return ddo;
}

function DirectiveController(){

  var dctrl = this;

  dctrl.isempty = function(){
    if(dctrl.foundItems.length === 0 && dctrl.foundItems !== 'undefined'){
      return true;
    }
    return false;
  };
}


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
  var ctrl = this;

  ctrl.searchTerm = '';
  ctrl.found = [];
  ctrl.getMatchedMenuItems = function () {
    console.log("SearchTerm seen in ctrl: ", ctrl.searchTerm);
    ctrl.found = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)

  console.log("ctrl.found as seen at ctrl: ", ctrl.found);
  }
  ctrl.removeItem = function(itemIndex){
    ctrl.found.splice(itemIndex,1)
  }
};

MenuSearchService.$inject = ["$http", "ApiBasePath"];
function MenuSearchService($http, ApiBasePath){

  var service = this;

  var items = [];

  service.getMatchedMenuItems = function(searchTerm) {

    items = [];
    searchTerm = searchTerm.trim().toLowerCase()

    $http({
      method: "GET",
      url: (ApiBasePath)
    }).then(function(response){
      for ( var i = 0 ; i < response.data.menu_items.length ; i++){
        if( response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm)
        !== -1 && searchTerm != "") {

          items.push( response.data.menu_items[i]);
      }
    }
  }).catch(function(error){
      console.log("Fatal error!");
  });
  return items
};
}

})();
