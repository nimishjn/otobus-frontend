const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav_links")[0];

toggleButton.addEventListener("click", () => {
  toggleNavbar();
});

const navbarClose = document.getElementById("close-navbar");

navbarClose.addEventListener("click", () => {
  toggleNavbar();
});

function toggleNavbar() {
  navbarLinks.classList.toggle("nav_active");
}

var navbarVar = angular.module("myApp.navbar", []);

navbarVar.controller("NavbarCtrl", function ($scope, $http) {
  $http({
    url: "http://localhost:3001/userDetails",
    method: "get",
    headers: {
      "x-access-token": localStorage.getItem("token"),
    },
  })
    .then(function (response) {
      if (response.data.code === "S6") {
        $scope.loggedIn = true;
      }
    })
    .catch(function (err) {
      localStorage.removeItem("token");
      console.log(err);
      $scope.loggedIn = false;
    });

  $scope.logout = function () {
    localStorage.removeItem("token");
    window.location.href = "/#!/";
    window.location.reload();
  };
});
