import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Coupon } from '../Models/Coupon';
import { Customer } from '../Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private client: HttpClient) { }

  //Checked
  public purchaseCoupon(coupon: Coupon): Observable<Boolean>{

    return this.client.post<Boolean>("http://localhost:8080/customer/" + sessionStorage.token, coupon);

  }

  //Checked
  public getPurchasedCoupons(): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/customer/custCoup/" + sessionStorage.token);

  }

  //Checked
  public getPurchaseCouponsCategory(category: string): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/customer/custCoupCat/" + category +"/" + sessionStorage.token);

  }

  public getPurchasedCouponsPrice(price: number): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/customer/custCoupPrice/" + price + "/" + sessionStorage.token);

  }

  //maybe need to delete
  public customerDetails(): Observable<Customer>{

    return this.client.get<Customer>("http://localhost:8080/customer/" + sessionStorage.token);

  }

  //checked
  public getAllCoupons() : Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/customer/getAll/" + sessionStorage.token);

  }

}
