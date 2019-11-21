import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,Validators} from '@angular/forms';
import { GetGroceryListService } from '../get-grocery-list.service';

@Component({
  selector: 'app-shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.sass']
})
export class ShippingFormComponent implements OnInit {
  courseForm: FormGroup;
  FinalBill=[];
  TotalSum=0;
  constructor(private itemService:GetGroceryListService) {
  }

  ngOnInit() {
    this.initForm();
    console.log("before clasc");
    this.FinalBill=this.itemService.getFinalBill();
    console.log("Everytinh is fine");
    console.log(this.FinalBill);

    this.FinalBill.forEach(element => {
      console.log(typeof(element.Amount));
      this.TotalSum+=element.Amount;
      console.log(this.TotalSum);
    });

  }

  onSubmit() { 
    console.log("SUBMITTED"); 
    console.log(this.courseForm.value.Name);
    this.itemService.submitBill(this.courseForm.value.Name,this.courseForm.value.Address,
      this.courseForm.value.PhoneNo,this.courseForm.value.Postal_Code,this.TotalSum).subscribe();  
  }

  private initForm() {
    this.courseForm = new FormGroup({
      'Name': new FormControl(null, Validators.required),
      'Address': new FormControl(null),
      'PhoneNo': new FormControl(null),
      'Postal_Code': new FormControl(null)
    });
  }





  

}
