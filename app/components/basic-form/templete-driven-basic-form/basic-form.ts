import {Component, OnInit,  ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {User} from '../user-interface';
import {AppChild} from '../basic-child-comp';

@Component({
    selector: 'basic-form',
    moduleId: module.id,
    templateUrl: 'basic-form.html',
    styleUrls: ['basic-form.css']
})

export class BasicForm  implements OnInit {
    @ViewChild('parent', {read: ViewContainerRef})
    parent: ViewContainerRef;
    public user: User;
    public submitted: boolean = false;

    constructor (private componentFactoryResolver: ComponentFactoryResolver) {
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(AppChild);
        setTimeout(()=>{
            this.parent.createComponent(childComponent);
        }, 0);
    }

    public ngOnInit() {
        this.user = {
            name: '',
            password: ''
        };
    }

    public save(form: User, isValid: boolean) {
        this.submitted = true;
        console.log(form, isValid);
    }
    public add(form: any) {
        const childComponent = this.componentFactoryResolver.resolveComponentFactory(AppChild);
        setTimeout(()=>{
            this.parent.createComponent(childComponent);
        }, 0);
    }
}