import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { RetailerService } from 'src/app/services/retailer.service';
import { Product } from '../myproducts/Product';

@Component({
  selector: 'app-create-update-request',
  templateUrl: './create-update-request.component.html',
  styleUrls: ['./create-update-request.component.css']
})
export class CreateUpdateRequestComponent implements OnInit {

  productObject: Product = new Product();
  myProductList:Product[]=[];
  myProductForm: any;
  productId: number | undefined;
  fb: any;

  constructor( private retailerSer: RetailerService) { }

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

    this.getCreateUpdateRequest()
  }


  onClick(){
    console.log("update"+this.productId);
    this.retailerSer.getCreateUpdateRequest(this.productId).subscribe((data: Product) => {this.productObject = data});

  }


  public getCreateUpdateRequest() {
    this.retailerSer.getCreateUpdateRequest().subscribe( (data: any) => {this.getCreateUpdateRequest});
  }

}
