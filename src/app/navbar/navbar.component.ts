import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedInUser=false;
  loggedInUser:any;
  constructor(private authService:AuthService){}
  ngOnInit(){
    this.authService.logInUser.subscribe(user=>{
      this.isLoggedInUser=true;
      console.log("Navbar comp",user)
      this.loggedInUser=user;
    })
  }
}
