"use strict";

var listBookVar = angular.module("myApp.listBooking", []);
let deleteDataId = "";
listBookVar.controller("ListBookingCtrl", function ($scope, $http) {
  $http({
    url: "http://localhost:3001/listBookings",
    method: "get",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      if (response.data.code === "S2") {
        $scope.bookings = response.data.bookings;
      }
    })
    .catch(function (err) {
      alert(
        "Please login to continue. If you are logged in, then log out and login again."
      );
    });

  $scope.deleteData = function (deleteBusId) {
    deleteDataId = deleteBusId;
  };

  $scope.deleteBooking = function () {
    console.log("deleted " + deleteDataId);

    $http({
      url: `http://localhost:3001/deleteBooking/${deleteDataId}`,
      method: "delete",
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    })
      .then(function (response) {
        if (response.data.code === "S5") {
          alert("Booking id " + deleteDataId + " deleted.");
        }
      })
      .catch(function (err) {
        if (err.data.code === "E4") {
          alert("Deletion failed.");
        } else {
          alert(
            "Please login to continue. If you are logged in, then log out and login again."
          );
        }
      });
  };
});
