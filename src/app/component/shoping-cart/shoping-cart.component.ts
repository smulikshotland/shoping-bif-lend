import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ShopingCartService ,ShopingCart} from './../../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  listShopingCart:ShopingCart[]
  price:number;
  subscription: Subscription;
  constructor(private ShopingCartService:ShopingCartService) { }

  ngOnInit(): void {
    this.subscription = this.ShopingCartService.getlistShopingCart()
    .subscribe(res => {
      this.price=0

      this.listShopingCart=res;
      console.log("  this.listShopingCart",  this.listShopingCart);
      this.listShopingCart.map((itme:ShopingCart)=>{
        this.price +=  itme.price*itme.amount;
      })
      
    });
  

  }

  deleteItme(itme){
    this.ShopingCartService.rmoveItmeCart(itme);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
