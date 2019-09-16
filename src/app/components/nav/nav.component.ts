import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  notLogged: Boolean = true;
  company: Boolean = false;
  customer: Boolean = false;
  admin: Boolean = false;

  type: string;
  

  constructor(private loginService: LoginService) {}

  ngOnInit() {

    if(sessionStorage.type == "Company"){

      this.company = true;
      this.notLogged = false;

    }

    if(sessionStorage.type == "Customer"){

      this.customer = true;
      this.notLogged = false;

    }

    if(sessionStorage.type == "Administrator"){

      this.admin = true;
      this.notLogged = false;

    }

    if(sessionStorage.type == "notLogged"){

      this.admin = false;
      this.customer = false;
      this.company = false;
      this.notLogged = true;

    }

  }

  public refresh(){



  }

}
