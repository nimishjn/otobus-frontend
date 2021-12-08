"use strict";

var listBusVar = angular.module("myApp.listBus", []);

listBusVar.controller("ListBusCtrl", function ($scope, $http, $rootScope) {
  $http({
    url: "http://localhost:3001/listBuses",
    method: "get",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      if (response.data.code === "S2") {
        $scope.buses = response.data.buses;
      }
    })
    .catch(function (err) {
      alert(
        "Please login to continue. If you are logged in, then log out and login again."
      );
    });

  $scope.viewBusDetails = function (id) {
    console.log("hello");
    window.location = `#!/book?q=search&bus=${id}`;
  };
});
