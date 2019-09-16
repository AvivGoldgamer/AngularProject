import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  customer: Customer = new Customer();

  @ViewChild("cFName", {static:true}) errFName : ElementRef;
  @ViewChild("cLName", {static:true}) errLName : ElementRef;
  @ViewChild("cEmail", {static:true}) errEmail : ElementRef;
  @ViewChild("cPass", {static:true}) errPass : ElementRef;


  constructor(private adminService: AdminsService) { }


  ngOnInit() {

    this.customer.id = sessionStorage.customerID;

    this.adminService.getOneCustomer(this.customer.id).subscribe(Response =>{

      if(Response){

        this.customer = Response;

      }

      sessionStorage.customerID = null;


    });

  }


  public updateCustomer():void{

    this.adminService.updateCustomer(this.customer).subscribe(Response => {

      if(Response){

        alert("Customer updated successfully");

      }
      else{

        alert("Customer couldn't be updated");

      }
      

    });

  }

}
