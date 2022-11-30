import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  userLoginForm:any;
  constructor(private userSer: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      userId: ['', Validators.required],
      userName: ['', Validators.required],
      userMobileNumber:['',Validators.required],
      userEmail:['',Validators.required]		,
      password:['',Validators.required],
      Address:['',Validators.required],
    });
  }

  onSubmit() {
      this.userSer.addProd(this.userLoginForm.value).subscribe(data=> {} );
  }
}
