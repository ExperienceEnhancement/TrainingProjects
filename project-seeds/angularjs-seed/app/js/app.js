'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'views/partial1.html', controller: 'FirstController'});
  $routeProvider.otherwise({redirectTo: '/view1'});
});
