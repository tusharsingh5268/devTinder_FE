import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedInUser=false;
  loggedInUser:any;
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit(){
    this.authService.logInUser.subscribe(user=>{
      this.isLoggedInUser=true;
      this.loggedInUser=user;
    })
     this.authService.getLoggedInProfile().subscribe(res=>{
        this.authService.logInUser.next(res)
        
    },err=>{
      this.router.navigate(['/login'])
      console.log("Feed Error",err)
    })
    
  }
  onLogout(){
    this.router.navigate(['/login']);
    this.isLoggedInUser=false;
   this.authService.logOutApi().subscribe(res=>{
      console.log('res',res)
      
      this.router.navigate(['/login'])
   },err=>{
    console.log('logout api',err)
   })
   
  }
}
