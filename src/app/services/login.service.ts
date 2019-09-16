import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

   constructor(private client: HttpClient) { }

    public login(email: string, password: string, type: string):Observable<any>{

      return this.client.post<any>("http://localhost:8080/login/" + email + "/" + password + "/" + type,"");

    }


}
