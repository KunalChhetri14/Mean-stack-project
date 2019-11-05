import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponentComponent} from './items-component/items-component.component';
import { CartSectionComponent } from './cart-section/cart-section.component';


const routes: Routes = [{
  path:'ItemDisplay',component: ItemsComponentComponent},
  {path:'CartDetails',component: CartSectionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
