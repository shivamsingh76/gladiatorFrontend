import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';
import { Product } from './Product';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit {


  myProductList:Product[]=[];
  myProductForm: any;

  constructor(private retailerSer:RetailerService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myProductForm = this.fb.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productImage: ['', Validators.required],
      productDesc: ['', Validators.required],
      productPrice: ['', Validators.required],
      productBrand: ['', Validators.required],
      productQty: ['', Validators.required],
      categoryId: ['', Validators.required],
      retailerId: ['', Validators.required],

  });

    this.getProductByRetailer()
  
  }

  public getProductByRetailer(){
    this.retailerSer.getProductByRetailer().subscribe(data => (this.myProductList = data));
  }

}
