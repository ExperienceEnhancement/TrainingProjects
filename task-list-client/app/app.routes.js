"use strict";
var router_1 = require('@angular/router');
var daily_reports_component_1 = require('./components/daily-reports.component');
var routes = [
    {
        path: '',
        redirectTo: '',
        terminal: true
    },
    {
        path: 'daily-reports',
        component: daily_reports_component_1.DailyReportsComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map