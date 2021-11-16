"use strict";

// const { CONSOLE_APPENDER } = require("karma/lib/constants");

// Declare app level module which depends on views, and core components
var app = angular.module("myApp", [
  "ngRoute",
  "myApp.version",
  "myApp.home",
  "myApp.book",
  "myApp.listBus",
  "myApp.listBooking",
  "myApp.page404",
  "myApp.login",
  "myApp.signup",
]);
app.config([
  "$locationProvider",
  "$routeProvider",
  function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    // Home route
    $routeProvider.when("/", {
      templateUrl: "/components/home/home.html",
      controller: "HomeCtrl",
    });

    // Home route
    $routeProvider.when("/home", {
      templateUrl: "/components/home/home.html",
      controller: "HomeCtrl",
    });

    // About route
    $routeProvider.when("/about", {
      templateUrl: "/components/about/about.html",
      controller: "AboutCtrl",
    });

    // Page 404 route
    $routeProvider.when("/404", {
      templateUrl: "/components/page404/page404.html",
      controller: "Page404Ctrl",
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

    // List of Bookings route
    $routeProvider.when("/listBooking", {
      templateUrl: "/components/listBooking/listBooking.html",
      controller: "ListBookingCtrl",
    });

    // Login page
    $routeProvider.when("/login", {
      templateUrl: "/components/login/login.html",
      controller: "LoginCtrl",
    });
    // Signup page
    $routeProvider.when("/signup", {
      templateUrl: "/components/signup/signup.html",
      controller: "SignupCtrl",
    });

    $routeProvider.otherwise({ redirectTo: "/404" });
  },
]);
