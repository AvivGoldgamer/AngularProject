import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Coupon } from 'src/app/Models/Coupon';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public coupons: Coupon[];
  public coupon: Coupon;

  constructor(public customerService: CustomerServiceService) { }

  ngOnInit() {

    this.customerService.getAllCoupons().subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public purchaseCoupon(coupon: Coupon){

    this.customerService.purchaseCoupon(coupon).subscribe(Response =>{

      if(Response){

        alert("purchased");

      }

   });

   

}

}
