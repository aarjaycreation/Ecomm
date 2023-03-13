import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.css']
})
export class ViewAllProductByCategoryComponent implements OnInit {
 secarcategory = '';
  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit(): void {
   this.activatedRoute.queryParams.subscribe(data => {
   this.secarcategory = data['category'];
   })
  }

}
