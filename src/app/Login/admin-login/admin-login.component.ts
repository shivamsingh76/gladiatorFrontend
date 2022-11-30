import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  adminLoginForm:any;

  constructor(private adminSer: AdminService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.adminSer.doAdminLogin(this.adminLoginForm.value).subscribe((data) => {console.log(data)});

  }

}
