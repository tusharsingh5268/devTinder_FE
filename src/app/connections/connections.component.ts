import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../services/connections.service';
import { NgFor, NgIf } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css'
})
export class ConnectionsComponent implements OnInit {
  constructor(private connectionService:ConnectionsService){}
  showNoConnection:boolean=false;
  userConnections:any=[];
  ngOnInit(): void {
    this.connectionService.getAllConnections().subscribe((res:any)=>{
        this.userConnections=res?.data;
        if(this.userConnections?.length === 0){
          this.showNoConnection=true;
        }else{
          this.showNoConnection=false

        }
    })
  }
}
