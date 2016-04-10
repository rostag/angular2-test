System.register(['angular2/core', 'angular2/router', './leader-detail.component', './leader.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, leader_detail_component_1, leader_service_1;
    var LeadersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (leader_detail_component_1_1) {
                leader_detail_component_1 = leader_detail_component_1_1;
            },
            function (leader_service_1_1) {
                leader_service_1 = leader_service_1_1;
            }],
        execute: function() {
            LeadersComponent = (function () {
                function LeadersComponent(_leaderService, _router) {
                    this._leaderService = _leaderService;
                    this._router = _router;
                }
                LeadersComponent.prototype.getLeaders = function () {
                    var _this = this;
                    this._leaderService.getLeaders().then(function (leaders) { return _this.leaders = leaders; });
                };
                LeadersComponent.prototype.ngOnInit = function () {
                    this.getLeaders();
                };
                LeadersComponent.prototype.onSelect = function (leader) { this.selectedLeader = leader; };
                LeadersComponent.prototype.gotoDetail = function () {
                    var link = ['LeaderDetail', { id: this.selectedLeader.id }];
                    this._router.navigate(link);
                };
                LeadersComponent = __decorate([
                    core_1.Component({
                        selector: 'my-leaders',
                        templateUrl: 'app/leaders.component.html',
                        styleUrls: ['app/leaders.component.css'],
                        directives: [leader_detail_component_1.LeaderDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [leader_service_1.LeaderService, router_1.Router])
                ], LeadersComponent);
                return LeadersComponent;
            }());
            exports_1("LeadersComponent", LeadersComponent);
        }
    }
});
//# sourceMappingURL=leaders.component.js.map