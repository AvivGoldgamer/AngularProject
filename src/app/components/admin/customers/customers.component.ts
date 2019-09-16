import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Models/customer';
import { AdminsService } from 'src/app/services/Admin-Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  private customers:Customer[];
  private customer:Customer;

  private confirmed:string;

  constructor(private adminService: AdminsService, private router:Router) { }

  ngOnInit() {

    this.adminService.getAllCustomers().subscribe(Response =>{

      this.customers = Response;

    });

  }

  public deleteCustomer(customer: Customer){

    if(this.confirmed = "Confirm"){

      this.adminService.deleteCustomer(customer.id).subscribe(Response =>{

        if(Response){

          alert("Customer Deleted successfully");

        }

      });

    }

  }

  public updateCustomer(customer: Customer){

    sessionStorage.customerID = customer.id;

    this.router.navigateByUrl("/updateCust");

  }

}
