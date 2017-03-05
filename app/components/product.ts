import {Component, EventEmitter} from '@angular/core';

@Component({
    selector: 'product',
    moduleId: module.id,
    inputs: ['product'],
    outputs: ['select'],
    template: `<div class="product-image" [ngStyle]="{'background-image': 'url(app/src/img_' + product.id +'.jpg)'}">
        </div>
        <div class="product-detail"> {{product.name}} </div>
        <div class="product-detail"> {{product.price}} </div>
        <div class="product-detail">
            <rate [rating]="product.rating"> </rate>
        </div>
        <button type="button" (click)="add(product)"> Add to Cart</button>`,
        styleUrls: ['product.css']
})

export class Product {
    public select: EventEmitter<any> = new EventEmitter();
    public add(product: any) {
        this.select.emit(product);
    }
}