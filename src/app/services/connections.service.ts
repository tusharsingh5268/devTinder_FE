import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ConnectionsService {
  constructor(private http: HttpClient) {}

  updateRequest(status: string, id: string) {
    console.log(environment.apiUrl + 'request/review/' + status + '/' + id);
    return this.http.post(
      environment.apiUrl + 'request/review/' + status + '/' + id,
      {},
      { withCredentials: true }
    );
  }
  sendRequest(status: string, id: string) {
    console.log(environment.apiUrl + 'request/review/' + status + '/' + id);
    return this.http.post(
      environment.apiUrl + 'request/send/' + status + '/' + id,
      {},
      { withCredentials: true }
    );
  }

  getAllConnections() {
    return this.http.get(environment.apiUrl + 'user/connections', {
      withCredentials: true,
    });
  }

  getRequestConnection() {
    return this.http.get(environment.apiUrl + 'user/requests/received', {
      withCredentials: true,
    });
  }
}
