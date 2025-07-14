import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private http:HttpClient) { }

  getAllFeed(){
    return this.http.get(environment.apiUrl + "feed",{withCredentials:true})
  }


}
