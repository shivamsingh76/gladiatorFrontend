import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RetailerService } from 'src/app/services/retailer.service';


@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {


  retailerLoginForm:any;
  //invalid retailerLoginForm: false;

  constructor(private retailerSer: RetailerService, private fb: FormBuilder){ }

  ngOnInit(): void {
    
    this.retailerLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  
  }

  onSubmit() {

    this.retailerSer.doRetailerLogin(this.retailerLoginForm.value).subscribe((data) => {console.log(data)});

  }

}
