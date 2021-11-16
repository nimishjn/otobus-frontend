"use strict";

var loginVar = angular.module("myApp.login", []);
loginVar.controller('LoginCtrl', function ($scope, $http) {
    $scope.eml_add = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
 
});