import { Component, OnInit } from '@angular/core';
import { Coupon } from 'src/app/Models/Coupon';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { CustomerServiceService } from 'src/app/services/customer-service.service';
import { ExtraService } from 'src/app/services/extra.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  coupon: Coupon = new Coupon;

  constructor(private companyService: CompanyServiceService, private extraService: ExtraService) { }

  ngOnInit() {

    this.coupon.id = sessionStorage.couponID;

    this.extraService.getOneCoupon(this.coupon.id).subscribe(Response =>{

      this.coupon = Response;

    });

    sessionStorage.couponID = null;


  }

  public updateCoupon(){

    this.companyService.updateCoupon(this.coupon).subscribe(Response =>{

      if(Response){

        alert("Coupon updated successfully");
  
      }
      else{
  
        alert("Coupon couldn't be updated");
  
      }

    });

  }

}
