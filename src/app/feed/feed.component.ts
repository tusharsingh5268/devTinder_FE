import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FeedService } from '../services/feed.service';
import { NgFor } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgFor,UserCardComponent],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  constructor(private feedService:FeedService){}
  allUsers:any=[];
  ngOnInit(): void {
    this.feedService.getAllFeed().subscribe((res:any)=>{
      console.log("feed component",res)
      this.allUsers=res?.data;
    })
  }
}
