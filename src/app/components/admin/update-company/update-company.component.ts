import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AdminsService } from 'src/app/services/Admin-Service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  company: Company = new Company();

  
  @ViewChild("cLName", {static:true}) errLName : ElementRef;
  @ViewChild("cEmail", {static:true}) errEmail : ElementRef;
  @ViewChild("cPass", {static:true}) errPass : ElementRef;


  constructor(private adminService: AdminsService) { }

  ngOnInit() {

    this.company.id = sessionStorage.companyID;

    this.adminService.getOneCompany(this.company.id).subscribe(Response =>{

      if(Response){

        this.company = Response;

      }

      sessionStorage.companyID = null;

    });

  }

  public updateCompany():void{

  this.adminService.updateCompany(this.company).subscribe(Response => {

    if(Response){

      alert("Company updated successfully");

    }
    else{

      alert("Company couldn't be updated");

    }
    

  });

}

}
