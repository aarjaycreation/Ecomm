import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    ViewAllProductComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    ViewAllProductByDateComponent,
    ViewAllProductByCategoryComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
