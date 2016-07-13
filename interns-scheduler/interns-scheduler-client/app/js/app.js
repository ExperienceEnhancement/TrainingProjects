'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('internsScheduler', [
  'ngRoute',
  'ui.bootstrap'
]);

app.config(function($routeProvider) {
  $routeProvider.when('/daily-reports', {templateUrl: 'views/interns/daily-reports.html', controller: 'InternsDailyReportsController'});
  $routeProvider.otherwise({redirectTo: '/daily-reports'});
});
