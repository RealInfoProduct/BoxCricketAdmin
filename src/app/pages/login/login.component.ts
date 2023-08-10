import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';
import { msgType } from 'src/assets/constant/message';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  showPassword:boolean = false
  isLoading = false
  userList:any;
  employeeList:any;
  allCompanyEmployees  : any = [];
  matchedEmployee : any;
  CompanyLogin : boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

              
  ngOnInit(): void {
    this.loginFormBuilder()
  }
  loginFormBuilder(){
    this.loginForm = this.formBuilder.group({
      email : [],
      password : []

    })
  }

  submit() { 
     this.authService.signIn(this.loginForm.value.email ,this.loginForm.value.email.password).subscribe((res:any) => {
      if(res){
        this.router.navigate(['web/dashboard'])
      }
     })
  }

}
