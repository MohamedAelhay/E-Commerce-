import { Component, OnInit } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/Service/local-storage-handler.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show : boolean
  wishListCounter : any
  cartCounter : any

  constructor(private storageHandler : LocalStorageHandlerService) {}

  showCart()
  {
    this.show = !this.show
  }

  ngOnInit() {
    this.storageHandler.getCartCounter()    
      .subscribe(data => this.cartCounter = data)

    this.storageHandler.getWishListCounter()    
      .subscribe(data => this.wishListCounter = data)
  }
}
