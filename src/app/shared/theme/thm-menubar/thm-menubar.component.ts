import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/service/auth.service';
import { CommonService } from 'src/app/service/common.service';


@Component({
  selector: 'app-thm-menubar',
  templateUrl: './thm-menubar.component.html',
  styleUrls: ['./thm-menubar.component.scss']
})
export class ThmMenubarComponent implements OnInit {
  
  menuList:any = [
    {
      icon:'ri-home-5-line ri-lg',
      name:'Dashboard',
      url:'/web/dashboard',
      children : [
        {
          name:'Dashboard',
          url:'/web/dashboard',
        },
      ],
    },
    {
      icon:'ri-user-3-line ri-lg',
      name:'Registration',
      url:'/web/registration',
      children : [
        {
          name:'Registration',
          url:'/web/registration',
        },
      ],
    },
    {
      icon:'ri-logout-box-r-line ri-lg',
      name:'Logout',
      url:'#',
      children : [
        {
          name:'Logout',
          url:'/login'
        },
      ],
    }
  ];

  menuIconList:any = []
  subMenuList:any = []

  menuListArr:any = []
  newMenuList:any = []
  activeLinkIndex:number = 0
  iconActiveIndex:number = 0
  isStatus : boolean  = true
  employeeId :any
  constructor( private service: CommonService ,private router: Router , private authService:AuthService) {}
  
  ngOnInit(): void {
        this.service.iconActiveIconIndex$.subscribe((res) =>{
          const index = res?.index
          const name = res?.name
          this.isStatus = true
          this.iconActive(index,name)
        })
 
          this.menuIconList = this.menuList;
  
  }
 

  iconActive(index:any,item:any){
    this.iconActiveIndex = index
    const subMenu = this.menuIconList.find((id:any)=>id.name == item)
    this.subMenuList = subMenu?.children
    localStorage.setItem('iconActiveIndex' , JSON.stringify({index:this.iconActiveIndex , name:item}))
    if(this.isStatus){
      const menuStatusList:any = localStorage.getItem("menuStatus")
      const menuStatus  = JSON.parse(menuStatusList)
      this.service.setValue(menuStatus)
      this.isStatus = false
    }else{  
      this.service.setValue({status:false})
    }
  }

  logout(item:any){
    if(item.name === "Logout"){
      this.authService.signOut()
    }
  }

  }

