"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var Product = (function () {
    function Product() {
        this.select = new core_1.EventEmitter();
    }
    Product.prototype.add = function (product) {
        this.select.emit(product);
    };
    return Product;
}());
Product = __decorate([
    core_1.Component({
        selector: 'product',
        moduleId: module.id,
        inputs: ['product'],
        outputs: ['select'],
        template: "<div class=\"product-image\" [ngStyle]=\"{'background-image': 'url(src/img_' + product.id +'.jpg)'}\">\n        </div>\n        <div class=\"product-detail\"> {{product.name}} </div>\n        <div class=\"product-detail\"> {{product.price}} </div>\n        <div class=\"product-detail\">\n            <rate [rating]=\"product.rating\"> </rate>\n        </div>\n        <button type=\"button\" (click)=\"add(product)\"> Add to Cart</button>",
        styleUrls: ['product.css']
    })
], Product);
exports.Product = Product;
//# sourceMappingURL=products.js.map