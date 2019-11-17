import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { splitClasses } from '@angular/compiler';

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

//  var cartItems=[];
export class GetGroceryListService {

  constructor(private http:HttpClient) { }
  cartContents=[];
  finalBillingContents=[];
  public getdata():Observable<format[]>
  {
    console.log("inside servie");
    return this.http.get<format[]>('http://localhost:3000/getDetails');
  }

  public addToCart(items)
  {
    items.Quantity=1;
    items.Amount=items.Price;
    // this.cartContents.push(items);
    
    
    // For Object this.cartContents
    let key=items['_id'];
    const obje={...items}
    this.cartContents[key]=obje;
    
    
    
    //console.log(this.cartContents);
    //console.log(JSON.stringify(items))
    //console.log(JSON.parse(items));
    // return this.http.post<format>('http://localhost:3000/addToCart',items,{
    //   headers:new HttpHeaders({
    //     'Content-Type':'application/json'
    //   })
    // })
    
    
  }


 
  

  public removeFromCart(items){
    let delKey=items['_id'];
    delete this.cartContents[delKey];

  }

  public getCartContents()
  {
    console.log(this.cartContents);
    return this.cartContents;
    // return this.http.get<format[]>('http://localhost:3000/getAddCartItems')
  }

  public setFinalBill(finalBill)
  {
    this.finalBillingContents=finalBill;
  }

  public getFinalBill()
  {
    return this.finalBillingContents;
  }

  
}