import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Leader } from './leader';
import { LeaderService } from './leader.service';

@Component({
	selector: 'my-dashboard',
	templateUrl: 'app/dashboard.component.html',
	styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	leaders: Leader[] = [];
	constructor(
		private _router: Router,
		private _leaderService: LeaderService) {
	}
	ngOnInit() {
		this._leaderService.getLeaders()
			.then(leaders => this.leaders = leaders.slice(1, 5));
	}
	gotoDetail(leader: Leader) {
		let link = ['LeaderDetail', { id: leader.id }];
		this._router.navigate(link);
	}
}
