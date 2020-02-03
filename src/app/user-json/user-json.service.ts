import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface User {
  userUrl: string;
  jsonFile: string;
}
@Injectable({
  providedIn: 'root'
})
export class UserJsonService {
  userUrl = 'assets/userJson.json';
  constructor(private http: HttpClient) { }
  getUser() {
    return this.http.get(this.userUrl);
  }
}
