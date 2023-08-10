import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './setting/setting.component';
import { WebMainComponent } from './web-main.component';
import { RegistrationComponent } from './registration/registration.component';


@NgModule({
  declarations: [
    WebMainComponent,
    SettingComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SharedModule,
  ]
})
export class WebModule { }
