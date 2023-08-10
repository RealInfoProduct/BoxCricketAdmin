import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../web/dashboard/dashboard.component';
import { WebMainComponent } from './web-main.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [{
  path: '',
  component: WebMainComponent,

  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'registration',
      component: RegistrationComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
