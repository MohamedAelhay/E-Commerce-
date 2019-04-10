import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageHandlerService {

  constructor() { }

  addToCart(product : Product) { 
    let cart = this.getCart()
    let exists = cart.findIndex(item => item.ID == product.ID)
    
    if (exists == -1) {
        product['Qty'] = 1
        cart.push(product)
      } else {
        product['Qty'] ++
        cart.splice(exists,1,product)
      }    

    localStorage.setItem('cart',JSON.stringify(cart))
  }

  getCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart
  }

  addToWishList(id : number) {
    let wishList = this.getWishList()
    let exists = wishList.findIndex(item => item == id)
    
    if (exists == -1) {
      wishList.push(id)
    }
    localStorage.setItem('wishList', JSON.stringify(wishList))
  }

  getWishListLength() {
    let wishList = this.getWishList()
    return wishList.length
  }

  getWishList() {
    let wishList = JSON.parse(localStorage.getItem('wishList')) || []
    return wishList
  }
}
