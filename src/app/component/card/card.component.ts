import { Component, Input, OnInit } from '@angular/core';
import { ShopingCartService } from './../../services/shoping-cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item:{ id: string;name:string, title: string; img: string; }
  cunter = 0;
  showMore = false;
  constructor(private ShopingCartService:ShopingCartService) { }

  ngOnInit(): void {
  }

  toAdd(){
    this.cunter++;
  }

  toDecreas(){
    if(this.cunter>0)
    this.cunter--;
  }

  addToShopingCard(){
    const {id,title,name,img}=this.item
    this.ShopingCartService.addToShopingCart({
      id:id,
      title:title,
      name:name,
      img:img,
      amount:this.cunter
    }) 
  }


}
