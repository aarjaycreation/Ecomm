import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
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
