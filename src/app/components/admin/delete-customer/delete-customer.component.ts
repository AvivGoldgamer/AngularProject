import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/Admin-Service';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  id: number;
  customer: Customer = null;
  
  constructor(private adminService: AdminsService) { }

  ngOnInit() {
  }

  public deleteCustomer():void{

    this.adminService.deleteCustomer(this.id).subscribe(Response => {

      if(Response){

        alert("customer deleted successfully");

      }
      else{

        alert("Customer couldn't be deleted");

      }
      

    });

  }

}
