"use strict";

var signupVar = angular.module("myApp.signup", []);
signupVar.controller("SignupCtrl", function ($scope, $http) {
  $scope.ph_numbr = /^\+?\d{10}$/;
  $scope.eml_add =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  $scope.password_valid =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;

  $scope.signupSubmit = function () {
    $http({
      url: "http://localhost:3001/signup",
      method: "post",
      data: JSON.stringify({
        name: $scope.username,
        mobile: $scope.contact,
        email: $scope.email,
        password: $scope.password,
      }),
    })
      .then(function (response) {
        if (response.data.code === "S0") {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/#!/";
        }
      })
      .catch(function (err) {
        if (err.data.code === "L1") {
          alert("Email already in use. Try using another email.");
        } else {
          alert("Some error occured. Please try again later.");
        }
      });
  };
});
