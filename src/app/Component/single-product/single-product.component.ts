import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { Product } from 'src/app/models/products.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  products: Product[]
  productId : number

  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    
    this.productService.getProducts()
      .subscribe(data => this.products = data)

    this.route.params
      .subscribe(
        (param : Params) => { this.productId = param['id'] }
      )
  }
}
