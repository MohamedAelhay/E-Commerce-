import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products.model';
import { ProductService } from 'src/app/Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    return this.productService.getProducts()
      .subscribe(data => this.products = data)
  }

  goto(path: string)
  {
    this.router.navigate([path])
  }
}
