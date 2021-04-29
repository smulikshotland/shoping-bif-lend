import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cow-parts',
  templateUrl: './cow-parts.component.html',
  styleUrls: ['./cow-parts.component.scss']
})
export class CowPartsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showText(num, cardCuadroTag) {
    console.log("onMouseOver" ,num,cardCuadroTag);
    
    // cardCuadroTag.children["2"].style.display = "none";
    // cardCuadroTag.children["1"].style.display = "block";
  }

  hideLast(cardCuadroTag) {
    console.log("onMouseOut",cardCuadroTag);
    
    // cardCuadroTag.children["2"].style.display = "block";
    // cardCuadroTag.children["1"].style.display = "none";
  }

}
