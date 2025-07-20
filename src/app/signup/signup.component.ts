import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgIf,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  emailId: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  loginErrMessage: string = '';
  showErrorMessage: boolean = false;

  onSignup() {
    const data = {
      firstName:this.firstName,
      lastName:this.lastName,
      email: this.emailId,
      password: this.password,
    };
    this.authService.signUpApi(data).subscribe(
      (res:any) => {
        console.log('res', res);
        this.authService.logInUser.next(res.data);
        this.authService.setProfileUser(res.data);
        this.router.navigate(['/feed']);
      },
      (err) => {
        this.loginErrMessage = 'SignUp Unsuccessful!!';
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 2000);
        console.log('err', err);
      }
    );
    console.log('login clicked', this.emailId, this.password);
  }
}
