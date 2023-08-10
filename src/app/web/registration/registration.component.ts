import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isEdit: boolean = false
  isLoading: boolean = false
  technologyList :any = [
    {
      technologyName:"Data"
    },
  ]

  constructor() { }

  ngOnInit(): void {
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

  }
}
