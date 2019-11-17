import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetGroceryListService } from './get-grocery-list.service';
import { HttpClientModule } from '@angular/common/http';
import { ItemsComponentComponent } from './items-component/items-component.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponentComponent,
    CartSectionComponent,
    ShippingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [GetGroceryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
