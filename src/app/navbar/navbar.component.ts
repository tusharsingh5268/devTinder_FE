import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProfileService } from '../services/profile.service';

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
  constructor(private authService:AuthService,private router:Router,private profileService:ProfileService){}
  ngOnInit(){
    this.authService.logInUser.subscribe(user=>{
      this.isLoggedInUser=true;
      this.loggedInUser=user;
    })
     this.profileService.getLoggedInProfile().subscribe(res=>{
        this.authService.logInUser.next(res)
        this.authService.setProfileUser(res)
         this.router.navigate(['/profile'])
        
    },err=>{
      this.router.navigate(['/signup'])
      this.isLoggedInUser=false;
    })
    
  }
  onLogout(){
    this.router.navigate(['/login']);
    this.isLoggedInUser=false;
   this.authService.logOutApi().subscribe(res=>{
      
      this.router.navigate(['/login'])
   },err=>{
   })
   
  }
}
