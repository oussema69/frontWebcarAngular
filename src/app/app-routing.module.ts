import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminSide/components/admin-home/admin-home.component';
import { LoginComponent } from './login/login/login.component';
import { UserHomeComponent } from './UserSide/component/user-home/user-home.component';
import { RegisterComponent } from './login/register/register.component';
import { Guard } from'../app/guard/Guard';
import { HomeComponent } from './home/home.component';
import { TechnicienComponent } from './AdminSide/components/technicien/technicien.component';
import { ClientComponent } from './AdminSide/components/client/client.component';
import { InterventionComponent } from './AdminSide/components/intervention/intervention.component';
import { ContactComponent } from './AdminSide/components/contact/contact.component';
import { EditUserComponent } from './AdminSide/components/editUser/editUser.component';
import { AddTechComponent } from './AdminSide/components/addTech/addTech.component';
import { VoitureComponent } from './UserSide/component/voiture/voiture.component';
import { ProfileComponent } from './UserSide/component/profile/profile.component';
import { RecComponent } from './UserSide/component/rec/rec.component';
import { EditCarComponent } from './UserSide/component/editCar/editCar.component';
import { AddCarComponent } from './UserSide/component/addCar/addCar.component';
import { AddRecComponent } from './UserSide/component/addRec/addRec.component';
import { EditRecComponent } from './UserSide/component/editRec/editRec.component';
import { ListRecComponent } from './AdminSide/components/listRec/listRec.component';
import { CarComponent } from './AdminSide/components/car/car.component';
import { TechReclamationComponent } from './AdminSide/components/techReclamation/techReclamation.component';
import { UserInterventionComponent } from './UserSide/component/userIntervention/userIntervention.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  { path: 'home', component:HomeComponent  },
  { path: 'register', component:RegisterComponent  },
  { path: 'login', component:LoginComponent  },


  { path: 'homeAdmin', component: AdminHomeComponent ,
    children:[
      { path: 'tech', component:TechnicienComponent  },
      { path: 'client', component:ClientComponent  },
      { path: 'intervention/:id', component:InterventionComponent  },
      { path: 'contact', component:ContactComponent  },
      { path: 'edit/:id', component:EditUserComponent  },
      { path: 'add', component:AddTechComponent  },
      { path: 'recL/:id', component:ListRecComponent  },
      { path: 'car/:id', component:CarComponent  },
      { path: 'reclamation/:id', component:TechReclamationComponent  },


    ],canActivate: [Guard]

  },
  { path: 'homeUser', component: UserHomeComponent ,
  children:[
    { path: 'rec', component:RecComponent  },
    { path: 'voiture', component:VoitureComponent  },
    { path: 'profile', component:ProfileComponent  },
    { path: 'editCar/:id', component:EditCarComponent  },
    { path: 'addCar', component:AddCarComponent  },
    { path: 'addRec', component:AddRecComponent  },
    { path: 'editRec/:id', component:EditRecComponent  },
    { path: 'userinter/:id', component:UserInterventionComponent  },



  ],canActivate: [Guard]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
