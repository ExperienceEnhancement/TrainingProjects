'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('internsScheduler', [
  'ngRoute',
  'ui.bootstrap'
]);

app.constant('constants', {BASE_URL: 'http://localhost:3000', yearFormat: 'YYYY-MM-DD'});

app.config(function($routeProvider) {
  $routeProvider.when('/daily-reports', {templateUrl: 'views/interns/daily-reports.html', controller: 'InternsDailyReportsController'});
  $routeProvider.when('/documents', {templateUrl: 'views/interns/documents.html', controller: 'DocumentsController'});
  $routeProvider.otherwise({redirectTo: '/daily-reports'});
});
