import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './AdminSide/components/admin-home/admin-home.component';
import { LoginComponent } from '../app/login/login/login.component';
import { UserHomeComponent } from './UserSide/component/user-home/user-home.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './AdminSide/components/client/client.component';
import { ContactComponent } from './AdminSide/components/contact/contact.component';
import { InterventionComponent } from './AdminSide/components/intervention/intervention.component';
import { TechnicienComponent } from './AdminSide/components/technicien/technicien.component';
import { EditUserComponent } from './AdminSide/components/editUser/editUser.component';
import { AddTechComponent } from './AdminSide/components/addTech/addTech.component';
import { ProfileComponent } from './UserSide/component/profile/profile.component';
import { RecComponent } from './UserSide/component/rec/rec.component';
import { VoitureComponent } from './UserSide/component/voiture/voiture.component';
import { AddCarComponent } from './UserSide/component/addCar/addCar.component';
import { EditCarComponent } from './UserSide/component/editCar/editCar.component';
import { EditRecComponent } from './UserSide/component/editRec/editRec.component';
import { AddRecComponent } from './UserSide/component/addRec/addRec.component';
import { ListRecComponent } from './AdminSide/components/listRec/listRec.component';
import { CarComponent } from './AdminSide/components/car/car.component';
import { TechReclamationComponent } from './AdminSide/components/techReclamation/techReclamation.component';
import { UserInterventionComponent } from './UserSide/component/userIntervention/userIntervention.component';
import { CarPipe } from './pipes/car.pipe';
import { TechPipe } from './pipes/tech.pipe';
import { ReclamationPipe } from './pipes/reclamation.pipe';
import { ContactPipe } from './pipes/contact.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    LoginComponent,
    UserHomeComponent,
    RegisterComponent,
      HomeComponent,
      ClientComponent,
      ContactComponent,
      InterventionComponent,
      TechnicienComponent,
      EditUserComponent,
      AddTechComponent,
      VoitureComponent,
      RecComponent,
      ProfileComponent,
      EditCarComponent,
      AddCarComponent,
      AddRecComponent,
      EditRecComponent,
      ListRecComponent,
      CarComponent,
      TechReclamationComponent,
      UserInterventionComponent,
      CarPipe,
      TechPipe,
      ReclamationPipe,
      ContactPipe

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
