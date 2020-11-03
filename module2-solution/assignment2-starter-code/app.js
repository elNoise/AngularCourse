(function (){
'use strict';



var toBuyList = [{
    name: "Lentis",
    quantity: "350gr"
},{
    name: "Kidney Beans",
    quantity: "400gr"
},{
    name: "Chickpeas",
    quantity: "300gr"
},{
  name:"Tofu",
  quantity:"500gr"
},{
  name:"Brown Rice",
  quantity:"1000gr"
},{
  name:"Almonds",
  quantity:"700gr"
}
];


angular.module('CheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

  var toBuy = this;

  toBuy.toBuyList = ShoppingListCheckOffService.getItemsTwo(name);

  toBuy.toBuyList = toBuyList;  //toBuy.alBouList = alBouList;

  toBuy.itemName = "";
  toBuy.quantity = "";

  toBuy.addItem = function(itemIndex,name,quantity){
  ShoppingListCheckOffService.addItem(toBuy.toBuyList[itemIndex].name, toBuy.toBuyList[itemIndex].quantity);
  ShoppingListCheckOffService.removeItem(itemIndex);
  };
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var alBou = this;

  alBou.alBouList = ShoppingListCheckOffService.getItems();

}

function ShoppingListCheckOffService(){
  var service = this;

  var alBouList=[];

service.addItem = function (itemName, quantity){
  var item = {
    name: itemName,
    quantity: quantity
  }
  alBouList.push(item);
  console.log(alBouList);
};

// service.addItem2 = function (itemName, quantity){
//   var item = {
//     name: itemName,
//     quantity: quantity
//   }
//   toBuyList.push(item);
//   console.log(alBouList);
// };

// service.removeItem2 = function (itemIndex) {
//   toBuyList.splice(itemIndex, 1);
//   //console.log(toBuyList);
// };
service.removeItem = function (itemIndex) {
  toBuyList.splice(itemIndex, 1);
  console.log(toBuyList);
};
service.getItems = function (){
  return alBouList;
};
service.getItemsTwo = function(){
  return toBuyList;
};
}
})();



  // var items = [
  //   {
  //     name: "Milk",
  //     quantity: "2"
  //   },
  //   {
  //     name: "Donuts",
  //     quantity: "200"
  //   },
  //   {
  //     name: "Cookies",
  //     quantity: "300"
  //   },
  //   {
  //     name: "Chocolate",
  //     quantity: "5"
  //   }
  // ];

  //1
    // alBou.itemName = "";
    // alBou.itemQuantity = "";
    //
    // alBou.addItem = function () {
    //   ShoppingListCheckOffService.addItem(alBou.itemName, alBou.itemQuantity);
    // }
