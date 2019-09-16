import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from 'src/app/services/company-service.service';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  id: number;

  constructor(private companyService:CompanyServiceService) { }

  ngOnInit() {
  }

  public deleteCoupon(){

    this.companyService.deleteCoupon(this.id).subscribe(Response =>{

      if(Response){

        alert("deleted coupon successfully");

      }
      else{

        alert("coupon couldn't be deleted");

      }

    });

  }

}
