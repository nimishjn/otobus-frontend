"use strict";

// const { CONSOLE_APPENDER } = require("karma/lib/constants");

// Declare app level module which depends on views, and core components
var app = angular.module("myApp", [
  "ngRoute",
  "myApp.view1",
  "myApp.view2",
  "myApp.version",
  "myApp.home",
  "myApp.book",
  "myApp.listBus",
]);
app.config([
  "$locationProvider",
  "$routeProvider",
  function ($locationProvider, $routeProvider, $scope) {
    $locationProvider.hashPrefix("!");

    // Home route
    $routeProvider.when("/home", {
      templateUrl: "/components/home/home.html",
      controller: "homeCtrl",
    });

    // List of Buses route
    $routeProvider.when("/listBus", {
      templateUrl: "/components/listBus/listBus.html",
      controller: "ListBusCtrl",
    });

    // Book route
    $routeProvider.when("/book", {
      templateUrl: "/components/book/book.html",
      controller: "BookCtrl",
    });

    $routeProvider.otherwise({ redirectTo: "/view1" });
  },
]);
