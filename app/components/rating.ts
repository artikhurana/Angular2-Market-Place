import {Component} from '@angular/core';

@Component({
    selector: 'rate',
    moduleId: module.id,
    inputs: ['rating'],
    template: `<span class="fa fa-star"
        *ngFor="let star of stars"
        style="color: orange">
        </span>`
})

export class Rating {
    public rating: number
    public stars: Array<number>;
    public ngOnInit() {
        this.stars = new Array(this.rating);
    }
}