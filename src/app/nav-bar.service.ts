import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {
  headlines=[
    {name:"עגלת קניות",button:""},
    {name:"הרשמה"},
    {name:"אזור אישי"},
    {name:"אודות"},
    {name:"מתכונים"},
    {name:"מבצעים"},

  ]

  constructor() { }
}
