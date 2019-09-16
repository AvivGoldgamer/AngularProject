import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service.service';
import { Coupon } from 'src/app/Models/Coupon';

@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  coupon: Coupon = new Coupon();

  constructor(private companyService: CompanyServiceService) { }

  ngOnInit() {
  }

  public createCoupon(){

    this.companyService.addCoupon(this.coupon).subscribe(Response =>{

      if(Response){

        alert("Coupon added successfully");

      }
      else{

        alert("Coupon couldn't be added");

      }

    });

  }

}
