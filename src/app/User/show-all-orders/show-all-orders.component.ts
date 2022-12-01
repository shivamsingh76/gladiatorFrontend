import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Order } from 'src/app/Order/Order';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-show-all-orders',
  templateUrl: './show-all-orders.component.html',
  styleUrls: ['./show-all-orders.component.css']
})
export class ShowAllOrdersComponent implements OnInit {
  categoryList: Order[] = [];
  userLoginForm: any;
  constructor(private catSer: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      orderId: ['', Validators.required],
      userproductOrderQtyName: ['', Validators.required],
      productOrderPrice: ['', Validators.required],
      productId: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  onSubmit() {
    this.catSer.getAllCategory(this.userLoginForm.value).subscribe((data: Order[]) => (this.categoryList = data));
  }
}
