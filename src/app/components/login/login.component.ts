import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginObj: Login = new Login();

  

  @ViewChild("textEmail",{static : true}) textEmail : ElementRef;
  @ViewChild("textPassword",{static : true}) textPassword : ElementRef;
  @ViewChild("spanCust", {static:true}) SpanCust : ElementRef;
  @ViewChild("spanComp", {static:true}) SpanComp : ElementRef;
  @ViewChild("spanAdmin", {static:true}) SpanAdmin : ElementRef;
  @ViewChild("errSpanEmail", {static:true}) errEmail : ElementRef;
  @ViewChild("errSpanPassword", {static:true}) errPass : ElementRef;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {
  }

  public changeBG(choice: number): void{

    switch(choice){


      case 1:

          this.loginObj.type = "Customer";

          this.SpanCust.nativeElement.classList.add("selected");

          this.SpanComp.nativeElement.classList.remove("selected");
          
          this.SpanAdmin.nativeElement.classList.remove("selected");

          break;

      case 2:

          this.loginObj.type = "Company";

          this.SpanCust.nativeElement.classList.remove("selected");

          this.SpanComp.nativeElement.classList.add("selected");
          
          this.SpanAdmin.nativeElement.classList.remove("selected");

          break;

      case 3:

          this.loginObj.type = "Administrator";

          this.SpanCust.nativeElement.classList.remove("selected");

          this.SpanComp.nativeElement.classList.remove("selected");
          
          this.SpanAdmin.nativeElement.classList.add("selected");

          break;

      default:

          break;

    }

  }

  public login():void{

    this.loginService.login(this.loginObj.email, this.loginObj.password, this.loginObj.type).subscribe(Response =>{

      sessionStorage.type=this.loginObj.type;

      sessionStorage.token=Response.token;

      alert("You logged in successfully");

    })
     
    

  }

}
