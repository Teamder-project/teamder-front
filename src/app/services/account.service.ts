import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(`${environment.apiBaseUrl}/accounts`)
  }

  getById(id: string): Observable<Account> {
    return this.httpClient.get<Account>(`${environment.apiBaseUrl}/accounts/${id}`)
  }

  create(account: Account): Observable<Account> {
    return this.httpClient.post<Account>(`${environment.apiBaseUrl}/accounts`, account);
  }

  update(account: Account): Observable<Account> {
    return this.httpClient.put<Account>(`${environment.apiBaseUrl}/accounts`, account);
  }

  delete(id: string) {
    return this.httpClient.delete(`${environment.apiBaseUrl}/accounts/${id}`)
  }
}
