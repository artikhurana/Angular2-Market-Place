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
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent(http) {
        this.productsURL = './data.json';
        this.selectedProducts = [];
        this._http = http;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.getProducts().subscribe(function (products) {
            //console.log(products);
            _this.products = products;
        });
    };
    AppComponent.prototype.getProducts = function () {
        return this._http.get(this.productsURL).map(function (res) {
            //console.log("Response", res);
            return res.json().products;
        });
    };
    AppComponent.prototype.add = function (item) {
        var index = this.selectedProducts.indexOf(item);
        if (this.selectedProducts.indexOf(item) <= -1) {
            this.selectedProducts.push(item);
            item.selected = true;
        }
        else {
            this.selectedProducts.splice(index, 1);
            item.selected = false;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        moduleId: module.id,
        templateUrl: './app-component.html',
        styleUrls: ['./app-component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-component.js.map