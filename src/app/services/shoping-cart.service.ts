import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  data = [
    {"id":"1","title":"Meat" ,"img" : "https://images.freeimages.com/images/small-previews/33d/kusbasi-1327458.jpg" },
    {"id":"2","title":"Meat" ,"img" : "https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"3","title":"Meat" ,"img" : "https://images.pexels.com/photos/112781/pexels-photo-112781.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" },
    {"id":"4","title":"Meat" ,"img" : "https://images.pexels.com/photos/128401/pexels-photo-128401.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"5","title":"Meat" ,"img" : "https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"6","title":"Meat" ,"img" : "https://images.pexels.com/photos/236887/pexels-photo-236887.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"7","title":"Meat" ,"img" : "https://images.pexels.com/photos/618773/pexels-photo-618773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"8","title":"Meat" ,"img" : "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"9","title":"Meat" ,"img" : "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"10","title":"Meat" ,"img" : "https://images.pexels.com/photos/3997609/pexels-photo-3997609.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"11","title":"Meat" ,"img" : "https://images.pexels.com/photos/248337/pexels-photo-248337.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
    {"id":"12","title":"Meat" ,"img" : "https://images.pexels.com/photos/139399/bull-landscape-nature-mammal-139399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" }

]

  constructor() { }
}
