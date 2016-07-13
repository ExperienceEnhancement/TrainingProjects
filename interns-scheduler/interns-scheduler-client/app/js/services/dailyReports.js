app.factory('dailyReports', function () {
    var getReportByDate = function (date) {
        var report = [
            { id: 1, date: '12.07.2016', description: 'jQuery research', hours: 1},
            { id: 2, date: '12.07.2016', description: 'EntityFramework research', hours: 4},
            { id: 3, date: '12.07.2016', description: 'App bugs fixes', hours: 3}
        ];
        
        return report;
    };
    
    return {
        byDate: getReportByDate
    }
});