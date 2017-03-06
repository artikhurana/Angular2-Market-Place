"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var basic_child_comp_1 = require("../basic-child-comp");
var BasicForm = (function () {
    function BasicForm(componentFactoryResolver) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.submitted = false;
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(basic_child_comp_1.AppChild);
        setTimeout(function () {
            _this.parent.createComponent(childComponent);
        }, 0);
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
    BasicForm.prototype.add = function (form) {
        var _this = this;
        var childComponent = this.componentFactoryResolver.resolveComponentFactory(basic_child_comp_1.AppChild);
        setTimeout(function () {
            _this.parent.createComponent(childComponent);
        }, 0);
    };
    return BasicForm;
}());
__decorate([
    core_1.ViewChild('parent', { read: core_1.ViewContainerRef }),
    __metadata("design:type", core_1.ViewContainerRef)
], BasicForm.prototype, "parent", void 0);
BasicForm = __decorate([
    core_1.Component({
        selector: 'basic-form',
        moduleId: module.id,
        templateUrl: 'basic-form.html',
        styleUrls: ['basic-form.css']
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver])
], BasicForm);
exports.BasicForm = BasicForm;
//# sourceMappingURL=basic-form.js.map