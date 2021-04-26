import { Component, OnInit } from '@angular/core';
import { ShopingCartService ,ShopingCart} from './../../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  sum
  listShopingCart: ShopingCart[]
  constructor(private ShopingCartService:ShopingCartService) { }

  ngOnInit(): void {
    this.listShopingCart = this.ShopingCartService.ShopingCart;
  }

  deleteItme(itme){
    this.listShopingCart = this.listShopingCart.filter((item) => item.id !== itme.id);
    this.ShopingCartService.rmoveItmeCart(itme);
  }
  sumery(price){
    this.sum+=price
  }
  

}
