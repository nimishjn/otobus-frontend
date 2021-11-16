"use strict";

var signupVar = angular.module("myApp.signup", []);
signupVar.controller('SignupCtrl', function ($scope, $http) {
    $scope.ph_numbr = /^\+?\d{10}$/;
    $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
});