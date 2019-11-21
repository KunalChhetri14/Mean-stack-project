import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
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
  NumberPropery=0;
  public total_itemsSubject=new Subject<number>();
  
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
    this.NumberPropery+=1;
    // this.cartContents.push(items);
    
    
    // For Object this.cartContents
    let key=items['_id'];
    const obje={...items}
    this.cartContents[key]=obje;
    this.total_itemsSubject.next(this.NumberPropery);
    
    
    
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
    this.NumberPropery-=1;
    this.total_itemsSubject.next(this.NumberPropery);

  }

  public getCartContents()
  {
    console.log(this.cartContents);
    return this.cartContents;
    // return this.http.get<format[]>('http://localhost:3000/getAddCartItems')
  }

  public getNoOfItems()
  {
    return this.NumberPropery;
  }

  public setFinalBill(finalBill)
  {
    this.finalBillingContents=finalBill;
  }

  public getFinalBill()
  {
    return this.finalBillingContents;
  }

  public submitBill():Observable<format>
  {
    console.log("inside submit Bill");
    return this.http.post<format>('http://localhost:3000/addToCart',this.finalBillingContents,{
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    // .catch((err: HttpErrorResponse) => {

    //   if (err.error instanceof Error) {
    //     // A client-side or network error occurred. Handle it accordingly.
    //     console.error('An error occurred:', err.error.message);
    //   } else {
    //     // The backend returned an unsuccessful response code.
    //     // The response body may contain clues as to what went wrong,
    //     console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    //   }

    //   // ...optionally return a default fallback value so app can continue (pick one)
    //   // which could be a default value
    //   // return Observable.of<any>({my: "default value..."});
    //   // or simply an empty observable
    //   return Observable.empty<format>();
    // });


    
  }

  
  }



