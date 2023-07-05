import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { ApiPaths } from 'src/app/shared/enums/api-paths.enum';
import * as dayjs from 'dayjs';
import { first, shareReplay, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }

  login(email: string, password: string) {
    return this.http.post(
      `${this.baseUrl}/${ApiPaths.Auth}/authenticate`,
      { email, password })
      .pipe(first())
      .subscribe({
        next: (response) => {
          console.log(response);
          this.setSession(response);
          this.router.navigateByUrl('home')
        },
        error: (error) => {
            console.log(error);
        }
      });
  }

  private setSession(authResult){

      const expiresAt = dayjs().add(authResult.expiresIn, 'millisecond');

      console.log(expiresAt)

      // saving to local storage token from authentication response
      localStorage.setItem('token', authResult.token);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }
}
