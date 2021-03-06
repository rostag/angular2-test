import { Component }       from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { LeaderService }     from '../leader/leader.service';
import { LeadersComponent } from '../leaders/leaders.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LeaderDetailComponent } from '../leader-detail/leader-detail.component';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app/app.component.html',
	styleUrls: ['app/app/app.component.css'],
	directives: [
		ROUTER_DIRECTIVES
	],
	providers: [
		ROUTER_PROVIDERS,
		LeaderService
	]
})
@RouteConfig([
	{
		path: '/leaders',
		name: 'Leaders',
		component: LeadersComponent
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'LeaderDetail',
		component: LeaderDetailComponent
	}
])

export class AppComponent {
	title = 'Leaders';
}
