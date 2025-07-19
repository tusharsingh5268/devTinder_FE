import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import {environment} from "../environment"
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http:HttpClient){}
    profileUser:any;
    logInUser=new Subject();
    loginApi(data:any){
        return this.http.post(environment.apiUrl + "login",data,{withCredentials:true})
    }
    logOutApi(){
        return this.http.post(environment.apiUrl+"logout",{},{withCredentials:true})
    }
    

    setProfileUser(user:any){
        this.profileUser=user
    }
    getProfileUser(){
        return this.profileUser;
    }

}