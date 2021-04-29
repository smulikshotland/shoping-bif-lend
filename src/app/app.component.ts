import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';
import { ShopingCartService } from './services/shoping-cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basar';
  public iconCart:boolean;
  arr = []
  constructor(public dialog: MatDialog,
    private ShopingCartService :ShopingCartService) {
    
    this.ShopingCartService.getlistShopingCart().subscribe(res =>{
      this.arr = res;
      this.iconCart = res == null ||  this.arr.length == 0  ? false : true; 
      console.log(" this.iconCart", this.iconCart);
  }
    )
  }
  openHelp(): void {
    this.dialog.open(ShopingCartComponent);
  }
 
 
 
    
     

   
 
}
