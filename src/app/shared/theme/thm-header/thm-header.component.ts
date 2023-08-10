import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-thm-header',
  templateUrl: './thm-header.component.html',
  styleUrls: ['./thm-header.component.scss']
})
export class ThmHeaderComponent implements OnInit {

  menuStatus: boolean = false
  fullScreen: boolean = false
  language = [
    {value : 'en'},
    {value : 'gu'},
]
  fullscreenmod: any;
  elem: any;
  isLoading :boolean = false
  companyData:any
  companyAndEmployeeName:any
  companyAndEmployeeEmail:any
  employeeList :any

  constructor(private router:Router,
              private translate:TranslateService,
              private service:CommonService) { 
    translate.addLangs(['en', 'gu']);
    translate.setDefaultLang('en')
  }

  ngOnInit(): void {
      this.service.menuStatusObservable$.subscribe((res) => {
          if(res){
            this.menuStatus = res.status
          }
      })
  }


  singleClicked(){
    this.menuStatus = !this.menuStatus
    this.service.setValue({status:this.menuStatus})
  }

  fullScreenMode(event:any){
    this.fullscreenmod = event.target.title
    this.fullScreen = !this.fullScreen
    this.elem = document.documentElement;
    if (this.fullscreenmod === 'full') {
      if (this.elem.requestFullscreen) {
        this.elem.requestFullscreen();
      }
    }
    else {
      if(this.fullscreenmod === 'off'){
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }}
  }

  languageChange(event:any){
    this.translate.use(event.attributes.value.value)
    this.service.setLanguage(event.attributes.value.value)
  }

}
