import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router) {
    this.loginForm = this.fb.group({
      usuario: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if(loggedIn){
      this.route.navigate(['/main']);
    }
  }

  onSubmit() {
    const formData = this.loginForm.value;
    const usuario = formData.usuario;
    const password = formData.password;

    if (this.loginForm.valid) {

      sessionStorage.setItem('formData', JSON.stringify(formData));
      sessionStorage.setItem('loggedIn', 'true');
      this.route.navigate(['/main']);
    } else {
      alert('No cumple la validación');
    }
  }
}
