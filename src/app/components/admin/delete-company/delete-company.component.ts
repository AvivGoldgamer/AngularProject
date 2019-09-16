import { Component, OnInit } from '@angular/core';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  id:number;



  constructor(private adminService: AdminsService) { }

  ngOnInit() {
  }

  public deleteCompany():void{

    this.adminService.deleteCompany(this.id).subscribe(Response => {

      if(Response){

        alert("Comapny have been deleted successfully");

      }
      else{

        alert("Company couldn't be deleted");

      }
      

    });

  }

}
