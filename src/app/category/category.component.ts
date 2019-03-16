import { Component, OnInit } from '@angular/core';
import {MainJsonService} from '../../services/main-json.service';
import {Category} from '../../models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private mainService: MainJsonService
  ) { }

  ngOnInit() {
    this.mainService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

}
