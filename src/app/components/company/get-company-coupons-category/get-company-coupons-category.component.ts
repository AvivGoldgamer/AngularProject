import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-get-company-coupons-category',
  templateUrl: './get-company-coupons-category.component.html',
  styleUrls: ['./get-company-coupons-category.component.css']
})
export class GetCompanyCouponsCategoryComponent implements OnInit {

  public coupons: Coupon[];

  public category: string;

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit() {
  }

  public getCompanyCouponsCategory(){

    this.companyService.getCompanyCouponsCategory(this.category).subscribe(Response =>{

      this.coupons = Response;

    });

}

}
