import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import{Product}from '../product'

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit  {

  productID = 0;
  productDetails: Product | any
  constructor(private activatedRoute: ActivatedRoute,
    private productService: ProductsService){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
    this.productID = data['id'];
    //console.log(data) 
    this.productService.viewProduct(this.productID).subscribe(productDate =>{
    this.productDetails = productDate;
    //console.log(this.productDetails)
    })

    });
  }
}
