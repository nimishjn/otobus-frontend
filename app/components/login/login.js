"use strict";

var loginVar = angular.module("myApp.login", []);
loginVar.controller('LoginCtrl', function ($scope, $http) {
    $scope.eml_add = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    $scope.password_valid =
        /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,15}$/;


    $scope.loginSubmit = function () {
        console.log($scope.login_email,$scope.login_password);
        $http({
            url: "http://localhost:3001/login",
            method: "post",
            data: JSON.stringify({
                email: $scope.login_email,
                password: $scope.login_password,
            }),
        })
            .then(function (response) {
                console.log(response);
                if (response.data.code === "S1") {
                    localStorage.setItem("token", response.data.token);
                    window.location.href = "/#!/";
                    window.location.reload();
                }
            })
            .catch(function (err) {
                if (err.data.code === "E3") {
                    alert("Do not have an account. Do signup first");
                } else if(err.data.code === "L0"){
                    alert("Password incorrect!");
                }
                else {
                    alert("Some error occured. Please try again later.");
                }
            });
    }

});