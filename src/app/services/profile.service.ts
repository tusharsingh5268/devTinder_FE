import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}
  getLoggedInProfile() {
    return this.http.get(environment.apiUrl + 'profile/view', {
      withCredentials: true,
    });
  }

  updateLoggedInProfile(data: any) {
    console.log('data', data);
    return this.http.patch(environment.apiUrl + 'profile/edit', data, {
      withCredentials: true,
    });
  }
}
