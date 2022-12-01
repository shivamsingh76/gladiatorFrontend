import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userLoginForm:any;
  constructor(private userSer: UserService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userLoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  onSubmit() {
    this.userSer.doAdminLogin(this.userLoginForm.value).subscribe((data) => {console.log(data)});

  }
}
