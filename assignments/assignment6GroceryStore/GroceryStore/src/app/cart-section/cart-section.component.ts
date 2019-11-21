import { Component, OnInit } from '@angular/core';
import { GetGroceryListService } from '../get-grocery-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrls: ['./cart-section.component.sass']
})
export class CartSectionComponent implements OnInit {
  cartContents={};
  TotalQuantity=0;
  TotalSum=0;
  dataArray=[]
    

  
  constructor(private itemService:GetGroceryListService,private router:Router) { }
 
  ngOnInit() {
    console.log("inside on init of cart selection");
    
        this.cartContents=this.itemService.getCartContents();
        this.dataArray=Object.values(this.cartContents);
        this.TotalQuantity=this.dataArray.length;
       
        //Finding total sum of all the items amount
        this.dataArray.forEach(element => {
         console.log(element.Amount);
         this.TotalSum+=element.Amount;console.log(this.TotalSum);
       });
  }

  Increase(Items,Item)
  {
    Item.Quantity+=1;
    this.TotalSum+=Item.Price;
    Item.Amount=Item.Quantity*Item.Price;
    this.TotalQuantity+=1;
    
  }

  Decrease(Items,Item)
  {
    if(Item.Quantity>0)
    {
      Item.Quantity-=1;
      this.TotalSum-=Item.Price;
      Item.Amount=Item.Quantity*Item.Price;
      this.TotalQuantity-=1;
     
    }
   
  }

  placeOrder()
  {
    console.log("FInal bill");
    console.log(this.dataArray);
    this.itemService.setFinalBill(this.dataArray);
    this.router.navigateByUrl('/shipping');
  }

  
  findSum(Items)
  {
    let sum=0;
    Items['Quantity'].forEach(element => {
      sum=sum+element; 
    });
    this.TotalQuantity=sum;
    
  }


}
