import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CustomerServiceService } from 'src/app/services/customer-service.service';

@Component({
  selector: 'app-get-purchased-coupons-price',
  templateUrl: './get-purchased-coupons-price.component.html',
  styleUrls: ['./get-purchased-coupons-price.component.css']
})
export class GetPurchasedCouponsPriceComponent implements OnInit {

  coupons: Coupon[];
  price: number;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {
  }

  public getCustomerCouponsPrice(){

    this.customerService.getPurchasedCouponsPrice(this.price).subscribe(Response =>{

      this.coupons = Response;

    });

  }

}
