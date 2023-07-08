import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import * as dayjs from 'dayjs';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { JwtTokenService } from './jwt-token.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  TOKEN_HEADER_KEY: string = "Authorization";
  token: string;


  constructor(
    private apiService: ApiService,
    private storage: LocalStorageService,
    private jwtService: JwtTokenService,
    private router: Router) { }

  register(user: User) {
    return this.apiService.register(user);
  }

  login(username: string, password: string) {
    return this.apiService.login(username, password);
  }

  logout() {
    this.storage.remove("token");
    this.router.navigateByUrl('home')
    .then(()=>{
      window.location.reload();
    })
  }


  public isLoggedIn() {
    return dayjs().isBefore(this.jwtService.getExpiryTime());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    // get from the user localStorage and check
    const expiration = this.storage.get("exp");

    const expiresAt = JSON.parse(expiration);
    return dayjs(expiresAt);
  }

  // call any type of storage from storage service
  getJWTToken(): string {
    return this.storage.get("token");
  }
}
