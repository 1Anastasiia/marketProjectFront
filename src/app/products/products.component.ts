import { Component, OnInit } from '@angular/core';
import {MainJsonService} from '../../services/main-json.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private mainService: MainJsonService
  ) { }

  ngOnInit() {
    this.mainService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

}
