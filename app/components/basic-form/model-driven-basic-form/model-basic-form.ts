import {Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {User} from '../user-interface';

@Component({
    selector: 'basic-form',
    moduleId: module.id,
    templateUrl: 'model-basic-form.html',
    styleUrls: ['model-basic-form.css']
})

export class ModelBasicForm  implements OnInit {
    public myForm: FormGroup;
    public user: User;
    public submitted: boolean = false;

    constructor(private _fb: FormBuilder) { }

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