import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FeedService } from '../services/feed.service';
import { NgFor, NgIf } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [NgFor,UserCardComponent,NgIf],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css'
})
export class FeedComponent implements OnInit {
  constructor(private feedService:FeedService){};
  showUserCardBtn:boolean=true;
  showNoUser:boolean=false;
  allUsers:any=[];
  ngOnInit(): void {
    this.getAllUserForFeed();
    this.feedService.updateFeedApi.subscribe(res=>{
      if(res){
        console.log('Again Feed API Trigger')
        this.getAllUserForFeed();
      }
    })
  }

  getAllUserForFeed(){
    this.feedService.getAllFeed().subscribe((res:any)=>{
      console.log("feed component",res)
      this.allUsers=res?.data;
      if(this.allUsers.length === 0){
          this.showNoUser=true;
      }else{
          this.showNoUser=false;

      }
    })
  }
}
