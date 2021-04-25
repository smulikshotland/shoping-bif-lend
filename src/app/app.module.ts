import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    InnerRouterComponent,
    NavBarComponent,
    FooterComponent,
    CardComponent,
    ListCardComponent,
    ShopingCartComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
