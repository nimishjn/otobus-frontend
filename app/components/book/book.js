"use strict";

var bookVar = angular.module("myApp.book", ["ngRoute"]);

bookVar.controller('BookCtrl', function ($scope, $http) {
  function getQueryVariable(variable) {
    return new URLSearchParams(window.location.href).get(variable);
  }

  const busId = getQueryVariable("bus");

  $http.get("./assets/buses.json").then(function (response) {
    $scope.buses = response.data;

    $scope.busDetails = $scope.buses.find((e) => e.id === busId);
  });

  $scope.bookTicket = function (id) {
    let myModal = document.getElementById("myModal");
    let myInput = document.getElementById("myInput");
    myInput.focus();
  };

  $scope.getNumber = function (num) {
    let temp = [];
    for (var j = 0; j < parseInt(num); j++) {
      temp.push(j);
    }
    return temp;
  };

  $scope.showHalfStar = function (num) {
    if (num - parseInt(num) > 0) {
      return true;
    }
    return false;
  };

  $scope.formSubmitted = function () {
    console.log("Payment form submitted!");
    console.log(
      $scope.paymentName,
      $scope.paymentCardNumber,
      $scope.paymentExpiryDate,
      $scope.paymentCVV,
      $scope.paymentTerms
    );

    window.location.href = "/#!/listBus";
  };
});
