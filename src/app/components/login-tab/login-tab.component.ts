import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-tab',
  templateUrl: './login-tab.component.html',
  styleUrls: ['./login-tab.component.css']
})
export class LoginTabComponent implements OnInit {

  private type: string = "notLogged";

  constructor(private router:Router) { }

  ngOnInit() {

      this.type = sessionStorage.type;

  }

  public loginButton(){

    this.router.navigate(["register"]);

  }

  public logoutButton(){

    sessionStorage.type = "notLogged";

  }

}
