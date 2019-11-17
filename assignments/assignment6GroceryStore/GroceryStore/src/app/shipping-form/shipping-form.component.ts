import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.sass']
})
export class ShippingFormComponent implements OnInit {
  courseForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {    
  }

  private initForm() {
    this.courseForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Address': new FormControl(null),
      'PhoneNo': new FormControl(null),
      'Postal Code': new FormControl(null)
    });
  }





  

}
