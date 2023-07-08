import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';
import { ApiPaths } from 'src/app/shared/enums/api-paths.enum';
import * as dayjs from 'dayjs';
import { Subject } from 'rxjs';

import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl: string = environment.baseUrl;
  loadingChange = new Subject<boolean>();
  loading = false;

  constructor(
    private http: HttpClient,
  ) { }

  login(email: string, password: string) {
    return this.http.post(
      `${this.baseUrl}/${ApiPaths.Auth}/authenticate`,
      { email, password });
  }

  register(user: User) {
    return this.http.post(
      `${this.baseUrl}/${ApiPaths.Auth}/register`,
      { user });
  }
}
