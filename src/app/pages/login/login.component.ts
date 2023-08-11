import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import * as moment from 'moment';
import { msgType } from 'src/assets/constant/message';
import { AuthService } from 'src/app/service/auth.service';
import { FirebaseService } from 'src/app/service/firebase.service';


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
  registrationList  : any = [];
  matchedEmployee : any;
  CompanyLogin : boolean = false

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private firebaseService: FirebaseService,
    private messageService :MessageService
  ) { }

              
  ngOnInit(): void {
    this.loginFormBuilder()
    this.firebaseService.getAllRegistrationData().subscribe((res:any) => {
      if (res) {
        this.registrationList = res
      }
    })
  }
  loginFormBuilder(){
    this.loginForm = this.formBuilder.group({
      email : [],
      password : []

    })
  }

  submit() { 
    if (this.registrationList.length > 0) {
      const employeeFind = this.registrationList.find((id:any) => id.email === this.loginForm.value.email)
      if(employeeFind && employeeFind?.status.name === "Active"){
        localStorage.clear()
        localStorage.setItem("UserId",employeeFind.id)
        this.router.navigate(['web/dashboard'])

      } else if(employeeFind?.status?.name === "Inactive"){
        this.messageService.add({
          severity: msgType.error,
          summary: 'Sucess',
          detail: 'user can not active..',
          life: 1500,
        });
      } 
      else {
        this.authService.signIn(this.loginForm.value.email ,this.loginForm.value.password).subscribe((res:any) => {
         if(res){
           this.router.navigate(['web/dashboard'])
         }
        }, (error) => {
          this.messageService.add({
            severity: msgType.error,
            summary: 'Error',
            detail: error.error.error.message,
            life: 1500,
          });
          this.isLoading = false
        })
      }
    }

  }

}
