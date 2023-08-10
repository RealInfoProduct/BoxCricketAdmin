import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms'; '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!:FormGroup

  isEdit: boolean = false
  isLoading: boolean = false
  technologyList :any = [
    {
      technologyName:"Data"
    },
  ]
  


  constructor( private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.registrationFormBuilder()
  }
  
  registrationFormBuilder (){
    this.registrationForm = this.formBuilder.group({
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      email : ['', Validators.required],
      password : ['', Validators.required],
      boxAddress : ['', Validators.required],
      boxNo : ['', Validators.required],
      mobileNo : ['', Validators.required], 


    })
  }

  addRegistration() : void {
    this.isEdit = false
  }

  editRegistration(item:any){
    this.isEdit = true
  }

  deleteRegistration(item:any){

  }

  submit(){
    console.log(this.registrationForm.value);
    
  }
}
