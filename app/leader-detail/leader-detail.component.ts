import {Component, Input, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';

import {Leader} from '../leader/leader';
import {LeaderService} from '../leader/leader.service';

@Component({
  templateUrl: 'app/leader-detail/leader-detail.component.html',
  styleUrls: ['app/leader-detail/leader-detail.component.css']
})

export class LeaderDetailComponent implements OnInit {
  @Input() leader: Leader;

  constructor(
    private _leaderService: LeaderService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._leaderService.getLeader(id)
      .then(leader => this.leader = leader);
  }

  goBack() {
    window.history.back();
  }
}