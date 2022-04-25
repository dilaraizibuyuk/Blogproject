import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BlogdetailComponent } from './components/blogdetail/blogdetail.component';
import { AuthInterceptor } from './interceptors/auth.interceptors';
import { AuthService } from './services/auth.service';
import { LoginGuard } from './guards/login.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryItemComponent } from './components/parts/category-item/category-item.component';
import { BlogItemComponent } from './components/parts/blog-item/blog-item.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FavoritesComponent,
    ProfileComponent,
    BlogdetailComponent,
    CategoryItemComponent,
    BlogItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor, multi:true
  },AuthService,LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
