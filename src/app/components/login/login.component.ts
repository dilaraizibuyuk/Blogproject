import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../models/model';
import { AuthService } from '../../services/auth.service';
import { MessagerService } from '../../services/messager.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder,
    private messager:MessagerService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }
  createLoginForm(){
    this.loginForm= this.formBuilder.group({
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }
  onSubmit(){
    if(this.loginForm.valid==false){
     this.messager.customSwal({
       title: 'Hata!',
       text: 'Formu eksiksiz doldurun',
       icon: 'error',
       confirmButtonText: 'Tamam'
     })
     return;
    }
    var data:Login=Object.assign({},this.loginForm.value)
    this.authService.singIn(data).subscribe(result=>{
      if(result.HasError){
        this.messager.error(result.Message);
      }
      else{
        localStorage.setItem("Token",result.Data.Token);
        this.router.navigate(["/"]);
      }
    },errorResult=>this.messager.error(errorResult))
  }

}
