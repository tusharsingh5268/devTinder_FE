import { Component, OnInit } from '@angular/core';
import { ConnectionsService } from '../services/connections.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-request-connections',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './request-connections.component.html',
  styleUrl: './request-connections.component.css'
})
export class RequestConnectionsComponent implements OnInit {
  constructor(private connectionService:ConnectionsService){}
    showNoRequestConnection:boolean=false;
    requestConnections:any=[];
    ngOnInit(): void {
      this.getRequestConnections()
    }
    getRequestConnections(){
       this.connectionService.getRequestConnection().subscribe((res:any)=>{
          console.log('res from connections',res?.data)
          this.requestConnections=res?.data;

          if(this.requestConnections?.length === 0){
            this.showNoRequestConnection=true;
          }else{
            this.showNoRequestConnection=false
  
          }
      })
    }
    onReviewClick(status:any,index:number){
      let id=this.requestConnections[index]?.fromUserId?._id;
      console.log('status',status,'this.requestId',id)

      this.connectionService.updateRequest(status,id).subscribe(res=>{
        console.log('updated request',res);
        this.getRequestConnections()
      });
      

    }
}
