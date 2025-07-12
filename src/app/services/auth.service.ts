import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import {environment} from "../environment"
@Injectable({providedIn:'root'})
export class AuthService{
    constructor(private http:HttpClient){}
    logInUser=new Subject();
    loginApi(data:any){
        return this.http.post(environment.apiUrl,data,{withCredentials:true})
    }

}