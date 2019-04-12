import { Injectable } from '@angular/core';
import { Product } from '../models/products.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageHandlerService {

  wichListCounter: BehaviorSubject<any> = new BehaviorSubject('')
  cartCounter : BehaviorSubject<any> = new BehaviorSubject(0)

  constructor() { 
    this.cartCounter.next(this.getCartLength())  
    this.wichListCounter.next(this.getWishListLength())
  }

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
      this.cartCounter.next(cart.length)
  }

  getCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    return cart
  }

  getCartLength() {
    let cart = this.getCart()
    return cart.length
  }

  getCartCounter() {
    return this.cartCounter.asObservable()
  }

  addToWishList(id : number) {
    let wishList = this.getWishList()
    let exists = wishList.findIndex(item => item == id)
    
    if (exists == -1) {
      wishList.push(id)
    }
    localStorage.setItem('wishList', JSON.stringify(wishList))
    this.wichListCounter.next(wishList.length)
  }

  getWishListLength() {
    let wishList = this.getWishList()
    return wishList.length
  }

  getWishList() {
    let wishList = JSON.parse(localStorage.getItem('wishList')) || []
    return wishList
  }

  getWishListCounter() {
    return this.wichListCounter
  }
}
