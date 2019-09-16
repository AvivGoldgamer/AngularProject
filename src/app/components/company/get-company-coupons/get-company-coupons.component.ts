import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-company-coupons',
  templateUrl: './get-company-coupons.component.html',
  styleUrls: ['./get-company-coupons.component.css']
})
export class GetCompanyCouponsComponent implements OnInit {

  coupons: Coupon[];
  coupon: Coupon;

  category:string;
  price: number;
  confirmed: string;

  constructor(private companyService: CompanyServiceService, private router: Router) { }

  ngOnInit() {

    this.companyService.getCompanyCoupon().subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public updateCoupon(coupon: Coupon){

    sessionStorage.couponID = coupon.id;

    this.router.navigateByUrl("/updateCoup");

  }

  public deleteCoupon(coupon: Coupon){

    if(this.confirmed = "Confirm"){

      this.companyService.deleteCoupon(coupon.id).subscribe(Response =>{

        if(Response){

          alert("Customer Deleted successfully");

        }

      });

    }

    this.companyService.deleteCoupon(coupon.id).subscribe(Response =>{

      if(Response){

        alert("Coupons Deleted successfully");

      }

    });

  }

  public changeToCategory(){

    this.companyService.getCompanyCouponsCategory(this.category).subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public changeToPrice(){

    this.companyService.getCompanyCouponsPrice(this.price).subscribe(Response =>{

      this.coupons = Response;

    });

  }

  public changeToAll(){

    this.companyService.getCompanyCoupon().subscribe(Response =>{

      this.coupons = Response;

    });

  }

}
