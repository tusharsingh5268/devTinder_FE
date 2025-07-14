import { Component } from '@angular/core';
import {
  FormsModule
} from "@angular/forms";
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  emailId:string="chetansingh@gmail.com";
  password:string="Chetan@123";
  loginErrMessage:string="";
  showErrorMessage:boolean=false;
  constructor(private authService:AuthService,private router:Router){}
  onLogin(){
    const data={
      "email": this.emailId,
      "password": this.password

    }
    this.authService.loginApi(data).subscribe(res=>{
      console.log('res',res)
      this.authService.logInUser.next(res);
      this.router.navigate(['/feed'])
    },err=>{
      this.loginErrMessage="Login Unsuccessful!!";
       this.showErrorMessage=true;
      setTimeout(() => {
        this.showErrorMessage=false;
      }, 2000);
      console.log('err',err)
    })
    console.log("login clicked",this.emailId,this.password)

  }
}
