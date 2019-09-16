import { Component, OnInit } from '@angular/core';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { Coupon } from 'src/app/Models/Coupon';

@Component({
  selector: 'app-get-purchased-coupons',
  templateUrl: './get-purchased-coupons.component.html',
  styleUrls: ['./get-purchased-coupons.component.css']
})
export class GetPurchasedCouponsComponent implements OnInit {

  coupons: Coupon[];
  coupon: Coupon;

  price: number;
  category: string;

  constructor(private customerService: CustomerServiceService) { }

  ngOnInit() {

    this.customerService.getPurchasedCoupons().subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public changeToCategory(){

    this.customerService.getPurchaseCouponsCategory(this.category).subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public changeToPrice(){

    this.customerService.getPurchasedCouponsPrice(this.price).subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public changeToAll(){

    this.customerService.getPurchasedCoupons().subscribe(Response =>{

      this.coupons = Response;

    });

  }

}
