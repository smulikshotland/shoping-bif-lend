import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent  {
  public iconCart:boolean;
   arr = []

  headlines
  constructor(private ShopingCartService :ShopingCartService,
    private service: TranslocoService,
    ) { 
     this.ShopingCartService.getlistShopingCart().subscribe(res =>{
          this.arr = res;
          this.iconCart = res == null ||  this.arr.length == 0  ? false : true; 
          console.log(" this.iconCart", this.iconCart);
     

    })
  }

  change(lang: string) {
    this.service.setActiveLang(lang);
  }
}



