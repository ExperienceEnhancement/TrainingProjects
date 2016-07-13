'use strict';

app.controller('InternsDailyReportsController', function($scope, calendar, dailyReports) {
    // Calendar settings
    $scope.today = function() {
        $scope.dt = new Date();
    };

    $scope.today();

    // Pop-up options
    // $scope.dateOptions = {
    //     showWeeks: true,
    //     dateDisabled: getNonWorkingDays
    // };
    //
    // $scope.open = function() {
    //     $scope.opened = true;
    // };
    //
    // $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    // $scope.format = $scope.formats[0];
    //
    // $scope.opened = false;

    // Inline options
    $scope.options = {
        showWeeks: true,
        dateDisabled: getNonWorkingDays
    };

    $scope.dailyReport = dailyReports.byDate(null);
    
    function getNonWorkingDays(data) {
        var date = data.date;
        var mode = data.mode;
        
        // Public holidays for the country
        var holidays = calendar.publicHolidays();
        
        // Compensate working days for public holidays
        var workingDays = calendar.workingDays();
        
        var isWeekend = (date.getDay() === 0 || date.getDay() === 6);
        var isHoliday = mode === 'day' && holidays.indexOf(date.setHours(0, 0, 0, 0)) > -1;
        var isWorkingDay = mode === 'day' && workingDays.indexOf(date.setHours(0, 0, 0, 0)) > -1;

        var isNonWorkingDay = (isHoliday || isWeekend) && !isWorkingDay;
        return isNonWorkingDay;
    }
    
    $scope.saveDailyReport = function() {
        console.log($scope.dailyReport);
    };

    $scope.addNewTask = function () {
        var newTask = { id: null, date: this.dt, description: '', hours: null};
        $scope.dailyReport.push(newTask);
    };

    $scope.printDt = function () {
        console.log(this.dt);
    }
});