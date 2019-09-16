import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {

  id: number;
  
  constructor(private adminService: AdminsService) { }

  ngOnInit() {
  }

  public getOneCustomer(){

    this.adminService.getOneCustomer(this.id).subscribe(Response =>{

      if(Response){

        // this.customer = Response;

        alert(Response.firstName);

      }
      else{

        alert("Customer couldn't be found");

      }

    });

  }

}
