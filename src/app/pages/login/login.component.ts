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

  constructor(private router:Router, private authService :AuthService ) { }

              
  ngOnInit(): void {

  }


  submit() { 

    const payload = {
      userName: "realloc@gmail.com",
      password : '123456'
    }

     this.authService.signIn(payload.userName ,payload.password).subscribe((res:any) => {
      if(res){
        console.log(res ,"res=========");
        this.router.navigate(['web/dashboard'])
      }
     })
  }

}
