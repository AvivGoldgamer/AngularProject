import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Company } from 'src/app/models/company';
import { AdminsService } from 'src/app/services/Admin-Service';
import { Router } from '@angular/router';
import { UpdateCouponComponent } from '../../company/update-coupon/update-coupon.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  private companies: Company[];
  private company:Company;

  private confirmed:string;

  constructor(private adminService: AdminsService, private router:Router) { }

  ngOnInit() {

    this.adminService.getAllCompanies().subscribe(Response =>{

      this.companies = Response;

    });

  }

  public deleteCompany(company:Company){

    if(this.confirmed == "Confirm"){

      this.adminService.deleteCompany(company.id).subscribe(Response =>{

        if(Response){

          alert("Company Deleted successfully");

        }

      });

    }

  }

  public updateCompany(company:Company){

    sessionStorage.companyID = company.id;

    this.router.navigateByUrl("/updateComp");

  }

}
