import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    form!: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private alertService: AlertService,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }



        this.authService.login(this.f['email'].value, this.f['password'].value)
            .subscribe({
                next: (result) => {
                    this.authService.performLogin(result);
                    this.router.navigateByUrl('home');
                },
                error: error => {
                    this.alertService.error(error);
                    this.form.setErrors({ unauthenticated: true })
                    this.loading = false;
                }
            });
    }
}