import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {UserInformation} from './user-info-interface';

@Component({
  selector: 'my-child',
 templateUrl: 'basic-child.html',
  moduleId: module.id,
})
export class AppChild implements OnInit  {
  public userInfo: UserInformation;
  public allForms: Array<any> = [];
  public ngOnInit() {
    this.userInfo = {
      country: '',
      street: '',
      state: '',
      city: ''
    };
  }
  public add(form: any) {
    this.allForms.push({});
  }
}