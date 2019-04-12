import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SingleProductComponent } from './Component/single-product/single-product.component';
import { CartComponent } from './Component/cart/cart.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product/:id', component: SingleProductComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
