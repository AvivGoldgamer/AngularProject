import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Company } from 'src/app/Models/company';
import { AdminsService } from 'src/app/services/Admin-Service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  company: Company = new Company();

  @ViewChild("cName", {static:true}) errName : ElementRef;
  @ViewChild("cEmail", {static:true}) errEmail : ElementRef;
  @ViewChild("cPass", {static:true}) errPass : ElementRef;

  constructor(private adminService: AdminsService) { }

  ngOnInit() {

    

  }

  public createCompany():void{

    this.adminService.addCompany(this.company).subscribe(Response => {

      if(Response){

        alert(Response.compName + " have beed added");

      }
      else{

        alert(Response.compName + " haven't been added for some reason");

      }
      

    });

  }

}
