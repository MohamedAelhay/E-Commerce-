import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = "https://mohamedaelhay.github.io/JSON-file/products.json"

  constructor(private _http:HttpClient) { }

  getProducts ()
  {
    return this._http.get<Product[]>(this.apiUrl)
  }
}
