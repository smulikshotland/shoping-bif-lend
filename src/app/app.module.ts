import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerRouterComponent } from './inner-router/inner-router.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './component/card/card.component';
import { ListCardComponent } from './component/list-card/list-card.component';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { CowPartsComponent } from './component/cow-parts/cow-parts.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    InnerRouterComponent,
    NavBarComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    ShopingCartComponent,
    PaymentPageComponent,
    CowPartsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
