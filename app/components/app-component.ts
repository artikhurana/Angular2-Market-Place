import {Component, OnInit} from "@angular/core";
import { Http, Response }  from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: './app-component.html',
    styleUrls: ['./app-component.css']
})

export class AppComponent {
    public productsURL = './data.json';
    public products: Array<any>;
    public selectedProducts: Array<any> = [];
    public selected: boolean;
    private _http: Http;

    constructor(http: Http) {
        this._http = http
    }

    public ngAfterViewInit() {
        this.getProducts().subscribe((products) => {
            //console.log(products);
            this.products = products;
        })
    }

    public getProducts(): Observable<any> {
        return this._http.get(this.productsURL).map((res: Response) => {
            //console.log("Response", res);
            return res.json().products;
        });
    }

    public add(item: any) {
        let index = this.selectedProducts.indexOf(item);
        if (this.selectedProducts.indexOf(item) <= -1) {
            this.selectedProducts.push(item);
            item.selected = true;
        } else {
            this.selectedProducts.splice(index, 1);
            item.selected = false;
        }
    }
}
