import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService, Product } from '../services/product.service';


interface Setting {
  name: String
}

class ClassroomSetting implements Setting {
  name: String

  constructor(name: String) {
    this.name = name;
  }
}

class CourseSetting implements Setting {
  name: String

  constructor(name: String) {
    this.name = name;
  }
}

@Component({
  selector: 'app-structural-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.css'
})
export class StructuralDirectivesComponent implements OnInit {
  products: Product[] = []
  
  isAdmin: Boolean = true;
  settings: Setting[] = [
    new ClassroomSetting("add student"),
    new ClassroomSetting("update student"),
    new CourseSetting("add course"),
    new CourseSetting("update course"),
  ];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.products = this.productService.getProducts()
  }
}
