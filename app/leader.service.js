System.register(['angular2/core', './mock-leaders'], function(exports_1, context_1) {
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
    var core_1, mock_leaders_1;
    var LeaderService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_leaders_1_1) {
                mock_leaders_1 = mock_leaders_1_1;
            }],
        execute: function() {
            LeaderService = (function () {
                function LeaderService() {
                }
                LeaderService.prototype.getLeaders = function () {
                    return Promise.resolve(mock_leaders_1.LEADERS);
                };
                LeaderService.prototype.getLeader = function (id) {
                    return Promise.resolve(mock_leaders_1.LEADERS).then(function (leaders) { return leaders.filter(function (leader) { return leader.id === id; })[0]; });
                };
                // Slow connection simulation:
                LeaderService.prototype.getLeadersSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_leaders_1.LEADERS); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                LeaderService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LeaderService);
                return LeaderService;
            }());
            exports_1("LeaderService", LeaderService);
        }
    }
});
//# sourceMappingURL=leader.service.js.map