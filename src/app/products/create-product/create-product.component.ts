import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { category } from '../../site-framework/category'
import { ProductsService } from '../products.service';
import { Product } from '../product'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  category: number = 0;
  name: string = '';
  is_available: boolean | undefined;
  rating: number = 0;
  description: string = '';
  price: number | undefined;
  vendor_name: string = '';



  categoryList: category | any;
  constructor(private productService: ProductsService) { }
  ngOnInit(): void {
    this.productService.getcategory().subscribe(data => {
      this.categoryList = data;
      //console.log(this.categoryList)
    });
  }

  addnewproduct(form: any) {
    let newproduct = {
      id: 12,
      category_id: this.category,
      name: this.name,
      is_available: this.is_available,
      rating: this.rating,
      description: this.description,
      price: this.price,
      vendor_name: this.vendor_name
    }

    console.log(newproduct);

    this.productService.createProduct(newproduct).subscribe(responce => {
      console.log(responce);
    });
  }
}
