import { Injectable } from '@angular/core';

export class Product {
  name: String

  constructor(name: String) {
    this.name = name
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    let products =  [
      new Product("product1"),
      new Product("product2"),
      new Product("product3"),
      new Product("product4"),
      new Product("product5")
    ];
    return products
  }
}
