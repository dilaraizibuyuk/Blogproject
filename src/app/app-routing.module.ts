import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogdetailComponent } from './components/blogdetail/blogdetail.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent} from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:'',component: HomeComponent, canActivate:[LoginGuard]},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'favorites',component: FavoritesComponent, canActivate:[LoginGuard]},
  {path:'profile',component: ProfileComponent, canActivate:[LoginGuard]},
  {path:'blog-detail',component: BlogdetailComponent, canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
