"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Rating = (function () {
    function Rating() {
    }
    Rating.prototype.ngOnInit = function () {
        this.stars = new Array(this.rating);
    };
    return Rating;
}());
Rating = __decorate([
    core_1.Component({
        selector: 'rate',
        moduleId: module.id,
        inputs: ['rating'],
        template: "<span class=\"fa fa-star\"\n        *ngFor=\"let star of stars\"\n        style=\"color: orange\">\n        </span>"
    })
], Rating);
exports.Rating = Rating;
//# sourceMappingURL=rating.js.map