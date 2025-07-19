import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  constructor(private http:HttpClient) { }

  getAllConnections(){
    return this.http.get(environment.apiUrl+ 'user/connections',{withCredentials:true})
  }


}
