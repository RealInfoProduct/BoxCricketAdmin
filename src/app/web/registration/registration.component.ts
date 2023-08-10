import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';import { ConfirmationService, MessageService } from 'primeng/api';
import { FirebaseService } from 'src/app/service/firebase.service';
import { msgType } from 'src/assets/constant/message';
import { RegistrationList } from 'src/interface/AuthResponse';
 '@angular/forms'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!:FormGroup
  isEdit: boolean = false
  isLoading: boolean = false
  registrationData :any = []
  editUserId :any 

  
  constructor( private formBuilder:FormBuilder ,
     private firebaseService:FirebaseService ,
     private messageService : MessageService,
     private confirmationService : ConfirmationService) { }

  ngOnInit(): void {
    this.registrationFormBuilder()
    this.getAllRegistrationData()
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
    this.editUserId = item.id 
    this.registrationForm.patchValue(item);
  }

  deleteRegistration(item:any){
    this.confirmationService.confirm({
      message: 'Do you want to delete this record ?',
      header: 'Delete Priority',
      accept: async () => {
        this.isLoading = true
        this.firebaseService.deleteRegistrationList(item).then(res => {
          this.messageService.add({
            severity: msgType.success,
            summary: 'Sucess',
            detail: 'Data Delete Successfully..',
            life: 1500,
          });
          this.isLoading = false
        })
      }
    })

  }

  submit(){
    const payload :  RegistrationList = {
      id: this.editUserId ? this.editUserId : '',
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      email: this.registrationForm.value.email,
      password: this.registrationForm.value.password,
      boxAddress: this.registrationForm.value.boxAddress,
      boxNo: this.registrationForm.value.boxNo,
      mobileNo: this.registrationForm.value.mobileNo,
    }
    this.isLoading = true
    if (this.isEdit) {
      this.firebaseService.updateRegistrationData(this.editUserId, payload).then((res:any) => {
        this.isLoading = false
      })
    } else {
      this.firebaseService.addRegistrationData(payload).then((res:any) => {
        if (res) {
          this.isLoading = false
        }   
      })
    }
  }

  getAllRegistrationData(){
    this.isLoading = true
    this.firebaseService.getAllRegistrationData().subscribe((res:any) => {
      if (res) {
        this.registrationData = res
        this.isLoading = false
      }
    })
  }
}
