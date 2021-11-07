"use strict";

var listBookVar = angular.module("myApp.listBooking", []);
var deleteDataId="";
listBookVar.controller('ListBookingCtrl', function ($scope, $http) {
  $http.get("./assets/booking.json").then(function (response) {
    $scope.bookings = response.data;
  });

  $scope.deleteData=function(deleteBusId){
    deleteDataId=deleteBusId;
    console.log(deleteDataId);
  }

  $scope.deleteBooking=function(){
    console.log("deleted " + deleteDataId);
    deleteDataId="";
  }
});