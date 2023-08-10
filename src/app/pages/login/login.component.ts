import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';
import { msgType } from 'src/assets/constant/message';


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

  constructor(private router:Router, private formBuilder:FormBuilder ) { }

              
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
    this.router.navigate(['web/dashboard'])
    console.log(this.loginForm.value);
    
  }

}
