"use strict";

var bookVar = angular.module("myApp.book", ["ngRoute"]);

bookVar.controller("BookCtrl", function ($scope, $http) {
  function getQueryVariable(variable) {
    return new URLSearchParams(window.location.href).get(variable);
  }

  const busId = getQueryVariable("bus");

  $http({
    url: "http://localhost:3001/busDetails",
    method: "post",
    data: JSON.stringify({
      busId: busId,
    }),
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      $scope.busDetails = response.data.bus;
    })
    .catch(function (err) {
      alert(
        "Please login to continue. If you are logged in, then log out and login again."
      );
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
