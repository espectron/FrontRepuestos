import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  img = 'https://www.tonica.la/__export/1618554108073/sites/debate/img/2021/04/16/satoru-gojo-el-personaje-mxs-poderoso-de-jujutsu-kaisen.png_1902800913.png';

  constructor() { }

  ngOnInit(): void {
  }

}
