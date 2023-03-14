import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Product } from './product';
import { category } from '../site-framework/category'



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getcategory():Observable<category>{
    const categoryURL = 'http://localhost:3000/categories';
    return this.httpClient.get<category>(categoryURL); 
  }

  getallProducts():Observable<Product>{
    const ProductsURL = 'http://localhost:3000/posts';
    return this.httpClient.get<Product>(ProductsURL); 
  }


  createProduct(productBody: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts';
    return this.httpClient.post<Product>(productURL, productBody); // return observable
  }
  

  viewProduct(productID: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts/'+productID;
    return this.httpClient.get<Product>(productURL); // return observable
  }
  updateProduct(productID: any,productBody: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts/'+productID;
    return this.httpClient.put<Product>(productURL, productBody); // return observable
  }

  deleteProduct(productID: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts/'+productID;
    return this.httpClient.delete<Product>(productURL); // return observable
  }

  searchCategoryProducts(categoryID: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts?category_id='+categoryID;
    return this.httpClient.get<Product>(productURL); // return observable
  }

  searchDateProducts(dateParam: any):Observable<Product> {
    const productURL = 'http://localhost:3000/posts/date='+dateParam;
    return this.httpClient.get<Product>(productURL); // return observable
  }
}
