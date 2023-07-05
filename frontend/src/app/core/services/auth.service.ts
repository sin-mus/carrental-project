import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  TOKEN_HEADER_KEY: string = "Authorization";
  token: string;


  constructor(private apiService: ApiService) { }

  login(username: string, password: string) {
    return this.apiService.login(username, password);
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
  }


  public isLoggedIn() {
    return dayjs().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    // get from the user localStorage and check
    const expiration = localStorage.getItem("expires_at");

    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  }
}
