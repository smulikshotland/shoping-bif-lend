import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerRouterComponent } from './inner-router/inner-router.component';

import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

  

const routes: Routes = [
  { path: '', component: InnerRouterComponent },
  { path: 'shoping-cart', component: ShopingCartComponent },
  { path: 'payment', component: PaymentPageComponent },


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
