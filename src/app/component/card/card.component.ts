import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() item:{ id: string; title: string; img: string; }
  cunter = 0;

  constructor() { }

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
    console.log(this.item,"cunter",this.cunter);
    
  }


}
