import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Coupon } from 'src/app/Models/Coupon';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  coupons: Coupon[];

  type: string;

  constructor(private customerService:CustomerServiceService) {}

  ngOnInit() {

    this.type = sessionStorage.type;

    alert(this.type);

    this.customerService.getAllCoupons().subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public purchaseCoupon(coupon: Coupon){

    this.customerService.purchaseCoupon(coupon).subscribe(Response =>{

      if(Response){

        alert("Coupon purchased successfully");

      }

    });

  }

}
