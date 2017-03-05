import {Component, OnInit} from '@angular/core';
import {User} from '../user-interface';

@Component({
    selector: 'basic-form',
    moduleId: module.id,
    templateUrl: 'basic-form.html',
    styleUrls: ['basic-form.css']
})

export class BasicForm  implements OnInit {
    public user: User;
    public submitted: boolean = false;

    ngOnInit() {
        this.user = {
            name: '',
            password: ''
        };
    }

    save(form: User, isValid: boolean) {
        this.submitted = true;
        console.log(form, isValid);
    }
}