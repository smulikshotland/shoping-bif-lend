import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCardComponent } from './component/list-card/list-card.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';


const routes: Routes = [
  { path: '', component: ListCardComponent  },
  { path: 'shoping-cart', component: ShopingCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
