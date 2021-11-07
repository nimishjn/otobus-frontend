"use strict";

var listBookVar = angular.module("myApp.listBooking", []);

listBookVar.controller('ListBookingCtrl', function ($scope, $http) {
  $http.get("./assets/booking.json").then(function (response) {
    $scope.bookings = response.data;
  });

  $scope.deleteBooking=function(id){
    console.log("deleted " +id);
    $scope.myData.splice($scope.myData.indexOf(id))
  }
});