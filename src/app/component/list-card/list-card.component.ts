import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from './../../services/shoping-cart.service';
@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  data:{ id: string;name:string, title: string; img: string; }[];

  constructor(private ShopingCartService:ShopingCartService) { }
  ngOnInit(): void {
    this.data = this.ShopingCartService.data; 
  }

}
