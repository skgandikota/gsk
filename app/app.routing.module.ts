import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginViewComponent } from './views/login/login.component';
import { HomeViewComponent } from './views/home/home.component';
import { OurServicesViewComponent } from './views/our-service/our-services.component';


@NgModule({
  declarations: [ 
    LoginViewComponent, HomeViewComponent, OurServicesViewComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginViewComponent },
      { path: 'home', component: HomeViewComponent },
      { path: 'our-services', component: OurServicesViewComponent },
      { path: '**', redirectTo: '#' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


