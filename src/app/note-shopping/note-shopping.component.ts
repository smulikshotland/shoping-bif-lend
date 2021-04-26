import { Component, OnInit } from '@angular/core';
import { ShopingCart, ShopingCartService ,} from './../services/shoping-cart.service';
@Component({
  selector: 'app-note-shopping',
  templateUrl: './note-shopping.component.html',
  styleUrls: ['./note-shopping.component.css']
})
export class NoteShoppingComponent implements OnInit {
  listShopingCart: ShopingCart[]

  constructor(private ShopingCartService:ShopingCartService) { }
  

  ngOnInit(): void {
    this.listShopingCart=this.ShopingCartService.ShopingCart;
    
  }

}
