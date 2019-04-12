import { Component, OnInit } from '@angular/core';
import { LocalStorageHandlerService } from 'src/app/Service/local-storage-handler.service';
import { Product } from 'src/app/models/products.model';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show : boolean
  wishListCounter : any
  cartCounter : any

  constructor(private storageHandler : LocalStorageHandlerService) {
    // const cart = this.storageHandler.getCartCounter()    
    //   cart.subscribe(data => this.cartCounter = data)
    //   console.log(this.cartCounter);

   }

  showCart()
  {
    this.show = !this.show
  }

  ngOnInit() {
    // this.storageHandler.getWishListLength()
    //   .subscribe(data => this.wishListCounter = data)

    this.storageHandler.getCartCounter()    
      .subscribe(data => this.cartCounter = data)

    this.storageHandler.getWishListCounter()    
      .subscribe(data => this.wishListCounter = data)
  }
}
