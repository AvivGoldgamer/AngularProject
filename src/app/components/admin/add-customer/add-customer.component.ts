import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  @ViewChild("cFName", {static:true}) errFName : ElementRef;
  @ViewChild("cLName", {static:true}) errLName : ElementRef;
  @ViewChild("cEmail", {static:true}) errEmail : ElementRef;
  @ViewChild("cPass", {static:true}) errPass : ElementRef;


  constructor(private adminService: AdminsService) { }

  ngOnInit() {
  }

  public createCustomer():void{

    this.adminService.addCustomer(this.customer).subscribe(Response => {

      if(Response){

        alert(Response.firstName+ " " + Response.lastName + " have beed added");

      }
      else{

        alert(Response.firstName+ " " + Response.lastName + " haven't been added for some reason");

      }
      

    });

  }

}
