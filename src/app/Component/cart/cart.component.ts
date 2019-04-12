import { Component, OnInit } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/Service/local-storage-handler.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart

  constructor(private cartObj : LocalStorageHandlerService) { 
    this.cart = this.cartObj.getCart()
  }

  ngOnInit() {

  }

  removeItem(itemId) {
    this.cartObj.removeCartItem(itemId)
    this.update_cart();
  }

  update_cart()
  {
    return this.cart = this.cartObj.getCart();
  }
}
