import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MainJsonService} from '../../services/main-json.service';
import {Product} from '../../models/Product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  // @Input() product;
  product: Product;

  constructor(
    private activatedRote: ActivatedRoute,
    private mainService: MainJsonService
  ) { }
  // ngOnInit() {
  //   const productId = this.activatedRote.snapshot.params.id;
  //   this.mainService.getProductById(productId).subscribe((product) => {
  //     this.product = product;
  //   });
  // }
  //or

  ngOnInit() {
    this.activatedRote.params.subscribe((params) => {
      const productId = params.id;
      this.mainService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    });

  }
}
