import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import{Product}from '../product'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  productID = 0;
  productDetails:Product | any ;

  constructor(private activatedRoute: ActivatedRoute,
    private productService:ProductsService){}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
    this.productID = data['id'];
    //console.log(data) 

    });

    this.productService.viewProduct(this.productID).subscribe(viewProduct =>{
    console.log(viewProduct)
    this.productDetails = viewProduct;
    });
  }

  UpdateProduct(from:any){
    let updateproduct = {
      id: this.productID,
      category_id: this.productDetails.category_id,
      name: this.productDetails.name,
      is_available: this.productDetails.is_available,
      rating: this.productDetails.rating,
      description: this.productDetails.description,
      price: this.productDetails.price,
      vendor_name: this.productDetails.vendor_name
    }
    this.productService.updateProduct(this.productID,updateproduct).subscribe(updatedata =>{
      console.log(updatedata)
    });
    //console.log(updateproduct)
  }
}
