import { AntiAuthGuard } from './antiAuth.guard';
import { EmailValidators } from './signup/email.validators';
import { PhoneNumberValidator } from './signup/phoneNo.validators';
import { TimeRemaining } from './../timeremaining.pipe';
import { ComplaintsService } from './complaints.service';
import { AuthServiceService } from './auth-service.service';
import { HomeComponent } from './home/home.component';
import { SocketService } from './../socket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { Http, HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, CanActivate } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { UserService } from './user.service';
import { AllcomplaintsComponent } from './allcomplaints/allcomplaints.component';
import { RegcomplaintsComponent } from './regcomplaints/regcomplaints.component';
import { Approved } from '../approved.pipe';
import { Unanalysed } from '../unanalysed.pipe';
import { Reverse } from '../reverse.pipe';
import { Status } from '../status.pipe';
import { SearchEmp } from '../searchemp.pipe';
import { RemoveDept } from '../removedept.pipe';
import { UsersComponent } from './users/users.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { UsernameValidators } from './signup/username.validators';
import { TrackComplaintComponent } from './track-complaint/track-complaint.component';
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EmployeeService } from './employee.service';
import { RegisterComplaintComponent } from './register-complaint/register-complaint.component';
import { TrackFormComponent } from './track-form/track-form.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { CompIDValidator } from './track-form/compID.validators';
import { AdminAuthGuard } from './adminAuth.guard';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent, canActivate: [AdminAuthGuard]},
  { path: 'allcomplaints', component: AllcomplaintsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'regcomplaints', component: RegcomplaintsComponent, canActivate: [AuthGuard, AdminAuthGuard] },
  { path: 'employees', component: UsersComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'track', component: TrackFormComponent },
  { path: 'track/:id', component: TrackComplaintComponent },
  { path: 'instructions', component: InstructionsComponent },
  { path: 'register-complaint', component: RegisterComplaintComponent },
  { path: '**', component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    AllcomplaintsComponent,
    RegcomplaintsComponent,
    TrackFormComponent,
    TimeRemaining,
    Approved,
    Unanalysed,
    Reverse,
    Status,
    UsersComponent,
    UserstatusComponent,
    SpinnerComponent,
    TrackComplaintComponent,
    DashboardComponent,
    RemoveDept,
    SearchEmp,
    RegisterComplaintComponent,
    InstructionsComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FlashMessagesModule,
    NgbModule.forRoot()
  ],
  providers: [
    SocketService, 
    AuthServiceService, 
    UserService, 
    ComplaintsService, 
    UsernameValidators,
    CompIDValidator, 
    EmailValidators,
    AuthGuard,
    AntiAuthGuard,
    AdminAuthGuard,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
