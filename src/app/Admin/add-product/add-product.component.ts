import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Category } from 'src/app/Category/Category';
import { Retailer } from 'src/app/Retailer/Retailer';
import { AdminService } from 'src/app/services/admin.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  addProductForm: any;
  categoryList: Category[] = [];
  retailerList: Retailer[] = [];

  constructor(
    private adminService: AdminService,
    private categoryService: CategoryService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {

    this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      productImage: ['', Validators.required],
      productDesc: ['', Validators.required],
      productPrice: ['', Validators.required],
      productBrand: ['', Validators.required],
      productQty: ['', Validators.required],
      categoryId: ['', Validators.required],
      retailerId: ['', Validators.required],
    });

    this.categoryService.getAllCategory().subscribe((data)=>this.categoryList=data);
    this.adminService.getAllRetailers().subscribe((data)=>this.retailerList=data);
  }

  onSubmit() {
    console.log(this.addProductForm.value);
    this.adminService.addProduct(this.addProductForm.value).subscribe((data) => {console.log(data)});
  }
}
