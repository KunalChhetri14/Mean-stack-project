import { Component, OnInit } from '@angular/core';
import { GetGroceryListService } from '../get-grocery-list.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.sass']
})
export class CartSectionComponent implements OnInit {
  cartContents=[];
  constructor(private itemService:GetGroceryListService) { }

  ngOnInit() {
    console.log("inside on init of cart selection");
    this.cartContents=this.itemService.getCartContents();
    console.log(this.cartContents);
  }




}
