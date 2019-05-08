import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}