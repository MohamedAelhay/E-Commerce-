import { Component, OnInit } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/Service/local-storage-handler.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show : boolean
  wishListCounter : any
  cartCounter : any
  cartItems

  constructor(private storageHandler : LocalStorageHandlerService) {}

  ngOnInit() {
    this.storageHandler.getCartCounter()    
      .subscribe(data => this.cartCounter = data)

    this.storageHandler.getWishListCounter()    
      .subscribe(data => this.wishListCounter = data)

    this.storageHandler.getCartObs()
      .subscribe(data => this.cartItems = data)
  }

  removeItem(id) {
    this.storageHandler.removeCartItem(id)
  }
}
