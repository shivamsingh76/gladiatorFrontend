import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-retailer',
  templateUrl: './add-retailer.component.html',
  styleUrls: ['./add-retailer.component.css']
})
export class AddRetailerComponent implements OnInit {

  addRetailerForm: any;

  constructor(private adminSer: AdminService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addRetailerForm = this.fb.group({
      retailerName: ['', Validators.required],
      retailerEmail: ['', Validators.required],
      retailerMobile: ['', Validators.required],
      retailerPassword: ['', Validators.required],

    });
  }

  onSubmit() {
    this.adminSer.registerRetailer(this.addRetailerForm.value).subscribe((data) => {console.log(data)});
  }

}
