import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';

interface format
{
  id:number,
  name:string,
  price:string,
  perKg:string,
  Image:String
}

@Injectable({
  providedIn: 'root'
})


export class GetGroceryListService {

  constructor(private http:HttpClient) { }
  cartContents=[{'name':"kunal",'Price':50,'Amount':40,"Quantity":1}];
  public getdata():Observable<format[]>
  {
    //console.log("inside servie");
    return this.http.get<format[]>('http://localhost:3000/fetchDetails');
  }

  public addToCart(items)
  {
    items.Quantity=1;
    items.Amount=items.Price;
    console.log("the no is : "+items.Quantity);
    this.cartContents.push(items);
    console.log(this.cartContents);
    
  }

  public getCartContents()
  {
    console.log(this.cartContents);

    return this.cartContents;
  }
  
}