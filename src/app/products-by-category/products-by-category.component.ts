import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainJsonService} from '../../services/main-json.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit {

  productsByCategory: Product[] = [];

  constructor(
    private activatedRote: ActivatedRoute,
    private mainService: MainJsonService
  ) { }


  ngOnInit() {
    this.activatedRote.params.subscribe((params) => {
      const categoryId = params.albumId;
      this.mainService.getProductsByCategories(categoryId).subscribe((productsByCategory) => {
        this.productsByCategory = productsByCategory;
      });
    });
  }

}
