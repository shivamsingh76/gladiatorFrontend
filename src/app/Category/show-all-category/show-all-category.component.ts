import { Component, OnInit } from '@angular/core';
import { CategotyService } from 'src/app/services/categoty.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Category } from '../Category';


@Component({
  selector: 'app-show-all-category',
  templateUrl: './show-all-category.component.html',
  styleUrls: ['./show-all-category.component.css']
})
export class ShowAllCategoryComponent implements OnInit {
  categoryList: Category[] = [];
  catForm: any ;

  constructor(private catSer: CategotyService, private fb: FormBuilder) { }

  ngOnInit(): void {

    //this.getAllCat();
    this.catForm = this.fb.group({
      categoryid: ['', Validators.required],
      categoryName: ['', Validators.required],
    });

    this.getAllCat()
    this.getProductByCat()

  }
  public getProductByCat() {
    this.catSer.getAllCategory().subscribe((data: Category[]) => (this.categoryList = data));
  }
  public getAllCat() {
    this.catSer.getAllCategory().subscribe((data: Category[]) => (this.categoryList = data));
  }



}
