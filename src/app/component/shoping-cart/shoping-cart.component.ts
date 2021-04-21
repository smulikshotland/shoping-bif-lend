import { Component, OnInit } from '@angular/core';
import { ShopingCartService ,ShopingCart} from './../../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  listShopingCart: ShopingCart[]
  constructor(private ShopingCartService:ShopingCartService) { }

  ngOnInit(): void {
    this.listShopingCart = this.ShopingCartService.ShopingCart;
  }

}
