import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-get-purchased-coupons-category',
  templateUrl: './get-purchased-coupons-category.component.html',
  styleUrls: ['./get-purchased-coupons-category.component.css']
})
export class GetPurchasedCouponsCategoryComponent implements OnInit {

  coupons: Coupon[];
  category: string;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
  }

  public getCustomerCouponsCategory(){

    this.customerService.getPurchaseCouponsCategory(this.category).subscribe(Response =>{

      this.coupons = Response;

    });

  }

}
