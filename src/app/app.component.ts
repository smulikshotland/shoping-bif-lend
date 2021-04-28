import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShopingCartComponent } from './component/shoping-cart/shoping-cart.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basar';
  constructor(public dialog: MatDialog) {}

  openHelp(): void {
    this.dialog.open(ShopingCartComponent);
  }
}
