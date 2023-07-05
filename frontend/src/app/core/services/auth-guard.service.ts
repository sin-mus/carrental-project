import { Injectable, inject } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivateFn, Router, RouterState, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable, catchError, of } from 'rxjs';
import { InjectSetupWrapper } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(public authService: AuthService, public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return this.authService.isAuthenticated;
    return this.authService.isLoggedIn();
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthGuardService).canActivate(next, state);
}