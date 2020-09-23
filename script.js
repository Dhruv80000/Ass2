var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    console.log("Hello");

    $scope.hide1 = true;
    $scope.hide2 = false;
    $scope.hide3 = false;
    $scope.hide4 = true;

    $scope.products = [
        {
            "name" : "Milk",
            "quantity" : "500 ml"
        },{
            "name" : "Bread",
            "quantity" : "25 p"
        },{
            "name" : "Cheese",
            "quantity" : "50 gm"
        },{
            "name" : "Ketchop",
            "quantity" : "85 gm"
        },{
            "name" : "Mionis",
            "quantity" : "875 gm"
        } 
    ];

    $scope.carts = [];

    $scope.addItem = function (product) {
        $scope.hide2 = true;

        $scope.carts.push(product);
        $scope.hide1 = false;

        if($scope.products.length == 1) {
            $scope.hide4 = false;
        }
    }

    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
      }
});