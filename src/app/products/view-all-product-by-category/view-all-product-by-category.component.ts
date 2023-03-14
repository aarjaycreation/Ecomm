import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Product} from '../product'
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
 secarcategory = '';

 productList : Product | any;
  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService)
  {}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe(data => {
    //console.log(data);
   this.secarcategory = data['id'];

   this.productService.searchCategoryProducts(this.secarcategory).subscribe(categorydata => {
    console.log(categorydata);
    this.productList = categorydata;
   });
   })
  }

}
