import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';


export interface ShopingCart {
  id: string,
  title: string
  name: string,
  img: string
  amount: Number
}

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  ShopingCart: ShopingCart[] = [];
  ShopingCart$ = new BehaviorSubject<ShopingCart[]>(null);


  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any[]>('assets/data.json').toPromise();
  }

  addToShopingCart(itme) {

    const { id, amount } = itme;
    const index = this.ShopingCart.findIndex(x => x.id === id);
    if (index == -1)
      this.ShopingCart.push(itme)

    else {
      const update = this.ShopingCart.map(el => {
        if (el.id == id) {
          return {
            ...el,
            amount: amount,
          }
        }
        else
          return el;
      });
      this.ShopingCart = update;
    }
  }
  rmoveItmeCart(itme) {
    const filteredShopingCart = this.ShopingCart.filter((item) => item.id !== itme.id);
    return this.ShopingCart = filteredShopingCart;

  }

}
