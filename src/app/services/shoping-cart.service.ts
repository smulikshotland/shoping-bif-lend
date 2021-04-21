import { Injectable } from '@angular/core';

export interface ShopingCart{
  id:string,
  title:string
  name:string,
  img:string
  amount:Number}

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  ShopingCart:ShopingCart[]=[];
  data = [
    {"id":"1","title":"Meat",name:"בשר בקר" ,"img" : "https://images.freeimages.com/images/small-previews/33d/kusbasi-1327458.jpg" },
    {"id":"2","title":"Meat",name:"סטייק" ,"img" : "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"3","title":"Meat",name:"בשר מספר 5" ,"img" : "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {"id":"4","title":"Meat",name:"בשר כבש" ,"img" : "https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"5","title":"Meat",name:"אנטריקוט " ,"img" : "https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"6","title":"Meat",name:"יישון בשר" ,"img" : "https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"7","title":"Meat",name:"סטייק מיושן " ,"img" : "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"8","title":"Meat",name:" צלעות כבש" ,"img" : "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"9","title":"Meat" ,name:` ולהתרפות לפי הצורך. לאחר השחיטה, כשאין עוד אספקת חמצן ומזון לתאים, מתכווצים השרירים. כדי להרפותם יש צורך בפירוק החלבונים אקטין ומיוזין, שהם הגורמים לכיווץ השריר.`,"img" : "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"10","title":"Meat",name:"" ,"img" : "https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"11","title":"Meat",name:"" ,"img" : "https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"12","title":"Meat",name:"" ,"img" : "https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }
]

  constructor() { }

  addToShopingCart(itme){
    const{id}=itme;
    const result = this.ShopingCart.filter(x => x.id === id);
    if(result){
    console.log("resultFilter",result);
    }
    this.ShopingCart.push(itme)
  }


}
