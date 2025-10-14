import { Injectable } from '@angular/core';
import { LoginForm } from '../models/Login';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../models/Person';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(req: LoginForm): Observable<Person> {
    return this.httpClient.post<Person>(
      'http://localhost:8080/auth/login',
      req
    );
  }

  logout(): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8080/auth/logout', {});
  }

  getPersonData(): Observable<Person> {
    return this.httpClient.get<Person>(
      'http://localhost:8080/auth/get-person',
    );
  }
}
