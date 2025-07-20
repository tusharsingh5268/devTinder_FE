import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}
  updateFeedApi = new Subject();
  getAllFeed() {
    return this.http.get(environment.apiUrl + 'feed', {
      withCredentials: true,
    });
  }
}
