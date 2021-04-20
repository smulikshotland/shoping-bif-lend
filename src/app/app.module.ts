import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InnerRouterComponent } from './inner-router/inner-router.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import{NavBarService} from './nav-bar.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './component/card/card.component';
import { ListCardComponent } from './component/list-card/list-card.component';


@NgModule({
  declarations: [
    AppComponent,
    InnerRouterComponent,
    NavBarComponent,
    FooterComponent,
    MainPageComponent,
    CardComponent,
    ListCardComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [NavBarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
