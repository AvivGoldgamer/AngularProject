import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-get-company-coupons-price',
  templateUrl: './get-company-coupons-price.component.html',
  styleUrls: ['./get-company-coupons-price.component.css']
})
export class GetCompanyCouponsPriceComponent implements OnInit {

  public coupons: Coupon[];

  public price: number;

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit() {
  }

  public getCompanyCouponsPrice(){

    this.companyService.getCompanyCouponsPrice(this.price).subscribe(Response =>{

      this.coupons = Response;

    });

}

}
