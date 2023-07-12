import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { User } from '../models/user';
import { LocalStorageService } from './local-storage.service';
import { JwtTokenService } from './jwt-token.service';
import { Router } from '@angular/router';
import { BehaviorSubject, map, of, tap } from 'rxjs';
import { subscribe } from 'diagnostics_channel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  TOKEN_HEADER_KEY: string = "Authorization";
  token: string;
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject(this.checkLoginStatus());
  fullName: BehaviorSubject<String> = new BehaviorSubject(null);
  userRole: BehaviorSubject<String> = new BehaviorSubject(null);


  constructor(
    private apiService: ApiService,
    private storage: LocalStorageService,
    private jwtService: JwtTokenService,
    private router: Router) { }

  register(user: User) {
    return this.apiService.register(user);
  }

  login(email: string, password: string) {
    return this.apiService.login(email, password);
  }

  logout() {
    this.storage.remove("token");
    this.storage.set("loginStatus", "0");
    this.loginStatus.next(false);
    this.fullName.next(null);
    this.userRole.next(null);
    this.router.navigateByUrl('home')
      .then(() => {
        window.location.reload();
      })
  }


  isLoggedIn() {
    return this.loginStatus.asObservable();
  }

  getFullName() {
    return this.fullName.asObservable();
  }

  getCurrentUserRole() {
    return this.userRole.asObservable();
  }

  // call any type of storage from storage service
  getJWTToken(): string {
    return this.storage.get("token");
  }

  performLogin(result: any) {
    // login successful if there's a jwt token in the response
    if (result && result['token']) {
      // first save to storage

      this.storage.set("token", result['token']);
      this.storage.set('loginStatus', "1");

      // send token to service with jwt util functions
      this.jwtService.setToken(this.storage.get("token"));

      // emit event on subject
      this.loginStatus.next(true);
      this.fullName.next(result['firstName'] + " " + result["lastName"]);
      this.userRole.next(result['role'])
    }
  }

  checkLoginStatus(): boolean {

    var loginCookie = this.storage.get("loginStatus");

    if (loginCookie == "1") {
      if (this.storage.get('token') === null || this.storage.get('token') === undefined) {
        return false;
      }

      // Get and Decode the Token
      const token = this.storage.get('token');
      this.jwtService.setToken(token);
      const decoded = this.jwtService.getDecodeToken();
      // Check if the cookie is valid

      if (decoded['exp'] === undefined) {
        return false;
      }

      // Get Current Date Time
      const date = new Date(0);

      // Convert EXp Time to UTC
      let tokenExpDate = date.setUTCSeconds(decoded['exp']);

      // If Value of Token time greter than 

      if (tokenExpDate.valueOf() > new Date().valueOf()) {
        return true;
      }

      console.log("NEW DATE " + new Date().valueOf());
      console.log("Token DATE " + tokenExpDate.valueOf());

      return false;

    }
    return false;
  }
}
