import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Register } from '../../models/model';
import { MessagerService } from 'src/app/services/messager.service';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messager: MessagerService

  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }
  createRegisterForm() {
    this.registerForm = this.formBuilder.group(
      {
        Email: ["", Validators.required],
        Password: ["", Validators.required],
        PasswordRetry: ["", Validators.required],
      }
    )
  }

  onRegister() {
    if (this.registerForm.valid == false) {
      this.messager.customSwal({
        title: 'Hata!',
        text: 'Formu eksiksiz doldurun',
        icon: 'error',
        confirmButtonText: 'Tamam'
      })
      return;
    }
    var data: Register = Object.assign({}, this.registerForm.value);
    this.authService.singUp(data).subscribe(result => {
      if (result.HasError) {
        this.messager.error(result.Message);
      }
      else {
        localStorage.setItem("Token", result.Data.Token);
        this.router.navigate(["/"]);
      }
    }, errorResult => this.messager.error(errorResult))
  }
}
