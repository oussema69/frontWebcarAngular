import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './AdminSide/components/admin-home/admin-home.component';
import { LoginComponent } from './login/login/login.component';
import { UserHomeComponent } from './UserSide/component/user-home/user-home.component';
import { RegisterComponent } from './login/login/register/register.component';
import { Guard } from'../app/guard/Guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login', component:LoginComponent  },
  { path: 'register', component:RegisterComponent  },
  { path: 'homeAdmin', component: AdminHomeComponent ,
    children:[


    ],canActivate: [Guard]

  },
  { path: 'homeUser', component: UserHomeComponent ,
  children:[


  ],canActivate: [Guard]

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
