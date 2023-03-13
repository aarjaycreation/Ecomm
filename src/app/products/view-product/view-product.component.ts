import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit  {

  productID = 0;
  constructor(private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
    this.productID = data['id'];
    //console.log(data) 

    });
  }
}
