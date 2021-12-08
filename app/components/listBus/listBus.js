"use strict";

var listBusVar = angular.module("myApp.listBus", []);

listBusVar.controller('ListBusCtrl', function ($scope, $http) {

  $http.get("./assets/buses.json").then(function (response) {
    $scope.buses = response.data;
  });

  $scope.viewBusDetails = function (id) {
    console.log("hello");
    window.location = `#!/book?q=search&bus=${id}`;
  };

});
