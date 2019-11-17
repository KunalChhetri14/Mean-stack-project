import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponentComponent} from './items-component/items-component.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { ShippingFormComponent } from './shipping-form/shipping-form.component';


const routes: Routes = [{
  path:'ItemDisplay',component: ItemsComponentComponent},
  {path:'CartDetails',component: CartSectionComponent},
  {path:'shipping',component:ShippingFormComponent},
  {path:'',component:ItemsComponentComponent},
  {path:'**',redirectTo:''}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
