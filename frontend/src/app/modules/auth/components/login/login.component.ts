import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  returnUrl: any;
  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  login(userName: string, password: string) {

    this.router.navigateByUrl('/dashboard');

  }

  onSubmit(values) {

    let username = values.username;
    let password = values.password;

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return console.log('Login Form Invalid');
    }
    this.loading = true;

    this.authService.login(username, password)

  }
}
