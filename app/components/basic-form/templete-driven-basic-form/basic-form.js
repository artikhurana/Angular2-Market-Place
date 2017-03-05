"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var BasicForm = (function () {
    function BasicForm() {
        this.submitted = false;
    }
    BasicForm.prototype.ngOnInit = function () {
        this.user = {
            name: '',
            password: ''
        };
    };
    BasicForm.prototype.save = function (form, isValid) {
        this.submitted = true;
        console.log(form, isValid);
    };
    return BasicForm;
}());
BasicForm = __decorate([
    core_1.Component({
        selector: 'basic-form',
        moduleId: module.id,
        templateUrl: 'basic-form.html',
        styleUrls: ['basic-form.css']
    })
], BasicForm);
exports.BasicForm = BasicForm;
//# sourceMappingURL=basic-form.js.map