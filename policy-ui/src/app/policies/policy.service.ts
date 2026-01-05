import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Policy } from './policy.model';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private apiUrl = 'https://api.insurance.com/policies';

  constructor(private http: HttpClient) {}

  getPolicies() {
    return this.http.get(this.apiUrl);
  }
}
