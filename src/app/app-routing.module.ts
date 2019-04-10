import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { SingleProductComponent } from './Component/single-product/single-product.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'product/:id', component: SingleProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
