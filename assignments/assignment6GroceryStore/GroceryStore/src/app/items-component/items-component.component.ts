import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  NoItems=0;

 
 
  constructor(private getItemsService:GetGroceryListService)
  {
    
  }
  ngOnInit()
  {
    this.getItemsService.getdata().subscribe(data=>this.name=data);
    console.log("inside init of items component");
  }
  addCar(ButtonStore,itemDetails)
  {
    if(ButtonStore.innerHTML=="Add To Cart")
    {
      this.getItemsService.addToCart(itemDetails);
      ButtonStore.innerHTML="Remove from Cart";
      ButtonStore.setAttribute("class","btn btn-danger");
      this.NoItems+=1;
     
    }
    else
    {
      this.getItemsService.removeFromCart(itemDetails);
      ButtonStore.innerHTML="Add To Cart";
      ButtonStore.setAttribute("class","btn btn-success");
      this.NoItems-=1;
    }
   



  }
}

