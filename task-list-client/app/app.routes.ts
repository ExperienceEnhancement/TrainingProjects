import { provideRouter, RouterConfig }  from '@angular/router';
import { DailyReportsComponent } from './components/daily-reports.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '',
        terminal: true
    },
    {
        path: 'daily-reports',
        component: DailyReportsComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];