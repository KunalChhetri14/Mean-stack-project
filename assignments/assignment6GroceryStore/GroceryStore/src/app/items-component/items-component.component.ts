import { Component, OnInit } from '@angular/core';
import { GetGroceryListService } from '../get-grocery-list.service';

@Component({
  selector: 'app-items-component',
  templateUrl: './items-component.component.html',
  styleUrls: ['./items-component.component.sass']
})
export class ItemsComponentComponent implements OnInit {


  

  title = 'GroceryStore';
  name=[];
  Cart=[];
 
  constructor(private getItemsService:GetGroceryListService)
  {
    
  }
  ngOnInit()
  {
    this.getItemsService.getdata().subscribe(data=>this.name=data);
  }
  addCar(ButtonStore,itemDetails)
  {
    console.log("inside cart");
    
    console.log("after butt");
    //console.log(itemDetails);
    this.getItemsService.addToCart(itemDetails);
    console.log(this.getItemsService.getCartContents);
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
    this.Cart=this.getItemsService.getCartContents();
    console.log(this.Cart);
  }
  

}

