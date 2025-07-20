import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { ProfileService } from '../services/profile.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, UserCardComponent, NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  id: any;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService
  ) {}
  showUserCardBtn:boolean=false;
  user: any;
  firstName: string = '';
  lastName: string = '';
  age: number | undefined;
  gender: string = '';
  about: string = '';
  photoUrl: string = '';
  profileErrMsg: string = 'Failed to update your profile!!';
  showProfileErr: boolean = false;
  profileSuccMsg: string = 'Profile Updated successfully!!';
  showProfileSucc: boolean = false;
  ngOnInit(): void {
    this.authService.logInUser.subscribe((res) => {
      console.log('res from subject', res);
      this.getInputValues(res);
      this.user = res;
    });
    console.log(this.authService.getProfileUser());
    this.user = this.authService.getProfileUser();
    this.getInputValues(this.user);
  }

  getInputValues(user: any) {
    this.firstName = user?.firstName;
    this.lastName = user?.lastName;
    this.age = user?.age;
    this.gender = user?.gender;
    this.about = user?.about;
    this.photoUrl = user?.photoUrl;
    this.id=user?._id
    console.log('this.firstName', this.firstName);
  }

  onSaveProfile() {
    const data = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      about: this.about,
      photoUrl: this.photoUrl,
    };
    this.profileService.updateLoggedInProfile(data).subscribe(
      (res: any) => {
        console.log('profile update', res);
        this.showProfileSucc = true;
        setTimeout(() => {
          this.showProfileSucc = false;
        }, 2000);
        this.authService.logInUser.next(res?.updatedUser);
        this.authService.setProfileUser(res?.updatedUser);
      },
      (err) => {
        console.log('failed to update profile');
        this.showProfileErr = true;
        setTimeout(() => {
          this.showProfileErr = false;
        }, 2000);
      }
    );
  }
}
