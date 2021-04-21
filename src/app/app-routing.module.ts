import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InnerRouterComponent } from './inner-router/inner-router.component';


const routes: Routes = [
  { path: '', component: InnerRouterComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
