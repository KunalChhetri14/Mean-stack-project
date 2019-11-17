import { Component } from '@angular/core';
import { GetGroceryListService } from './get-grocery-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'GroceryStore';
  name=[];
  Cart=[];
 
  constructor(private getItemsService:GetGroceryListService)
  {
    
  }



  // receiveMessage($event)
  // {
  //   this.Cart.push($event);
  //   console.log("INSIDE REVEICE OF PARENT ");
  //   console.log(this.Cart);
  // }
  ngOnInit()
  {
    this.getItemsService.getdata().subscribe(data=>this.name=data);
  }
  addCar(ButtonStore,itemDetails)
  {
    console.log("inside cart");
    
    console.log("after butt");
    console.log(itemDetails);
    this.getItemsService.addToCart(itemDetails);

    // var status=document.getElementById("EnDis").value;
    if(ButtonStore.innerHTML=="Add To Cart")
    {
      ButtonStore.innerHTML="Remove from Cart";
      ButtonStore.setAttribute("class","btn btn-danger");

    }
    else
    {
      ButtonStore.innerHTML="Add To Cart";
      ButtonStore.setAttribute("class","btn btn-success");
    }
   



  }


  getCartItems()
  {
    this.getItemsService.getCartContents();
    console.log(this.Cart);
  }
  

}
