import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../model/admin';

@Injectable({ providedIn: 'root' })
export class AdminService {
    private apiUrl = 'http://localhost:5000/api/admin';
    private _loginUrl = this.apiUrl + '/login';

    constructor(private http: HttpClient) {}

    private initializeHeaders(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Access-Control-Allow-Origin': '*'
        });
    }

    registerAdmin(admin: Admin): Observable<boolean> {
        const headers = this.initializeHeaders();
        return this.http.post<boolean>(`${this.apiUrl}/register`, admin, { headers });
    }

    login(loginData: {
        email: string;
        password: string;
      }): Observable<{
        state: boolean;
        provider?: string;
      }> {
        return this.http.post<{
          state: boolean;
          provider?: string;
        }>(this._loginUrl, loginData);
      }
}
