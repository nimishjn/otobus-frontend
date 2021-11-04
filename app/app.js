"use strict";

// const { CONSOLE_APPENDER } = require("karma/lib/constants");

// Declare app level module which depends on views, and core components
angular
  .module("myApp", [
    "ngRoute",
    "myApp.view1",
    "myApp.view2",
    "myApp.version",
    "myApp.home",
  ])
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      // Home route
      $routeProvider.when("/home", {
        templateUrl: "/components/home/home.html",
        controller: "homeCtrl",
      });

      $routeProvider.otherwise({ redirectTo: "/view1" });
    },
  ]);
