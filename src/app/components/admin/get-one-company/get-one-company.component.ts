import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})
export class GetOneCompanyComponent implements OnInit {

  id: number;
  company: Company;

  constructor(private adminService: AdminsService) { }

  ngOnInit() {
  }

  public getOneCompany(){

    this.adminService.getOneCompany(this.id).subscribe(Response =>{

      if(Response){

        alert(Response.compName);

      }
      else{

        alert("Company couldn't be found");

      }

    });

  }

}
