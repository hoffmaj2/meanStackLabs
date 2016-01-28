(function () {
    var app = angular.module('schedule', ['ngRoute', 'content']);

    app.directive('topHeader', function () {
        return {
            restrict: 'E',
            templateUrl: "views/header.html"
        };
    });

    app.directive('schedule', function () {
        return {
            restrict: 'E',
            templateUrl: "views/schedule.html"
        };
    });

    app.directive('navBar', function () {
        return {
            restrict: 'E',
            templateUrl: "views/navBar.html"
            //controller: "contentTypeController",
            //controllerAs: "types"
        };
    });


    app.directive("contentItem", function () {
        return {
            restrict: 'A',
            templateUrl: 'templates/contentItem.html'
        }
    });


})();