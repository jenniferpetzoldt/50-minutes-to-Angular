let foodApp = angular.module('foodApp', []);

foodApp.controller('FoodController', function(){
    let vm = this;
    vm.food = [];

    vm.addFood = function(){
        console.log('in addFood', vm.foodIn);
        vm.food.push(vm.foodIn);
        console.log('food thus far:', vm.food);
    }//end addFood
});//end controller