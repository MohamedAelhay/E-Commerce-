import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show : boolean

  constructor() { }

  showCart()
  {
    this.show = !this.show
    // alert('Mohamed')
  }

  ngOnInit() {
  }

}
