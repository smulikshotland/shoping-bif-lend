import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerRouterComponent } from './inner-router/inner-router.component';

import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';

  

const routes: Routes = [
  { path: '', component: InnerRouterComponent },
  { path: 'shoping-cart', component: ShopingCartComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
