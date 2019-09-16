import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Coupon } from '../Models/Coupon';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private client: HttpClient) { }

  

  //Checked
  public addCoupon(company: Company): Observable<Company>{

    return this.client.post<Company>("http://localhost:8080/company/" + sessionStorage.token, company);

  }

  //Checked
  public updateCoupon(coupon: Coupon): Observable<Coupon>{

    return this.client.put<Coupon>("http://localhost:8080/company/" + sessionStorage.token, coupon);

  }

  //Chekced
  public deleteCoupon(id: number): Observable<Coupon>{

    return this.client.delete<Coupon>("http://localhost:8080/company/" + id + "/" + sessionStorage.token);

  }

  //Checked
  public getCompanyCoupon(): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/company/coup/" + sessionStorage.token);

  }

  //Checked
  public getCompanyCouponsCategory(category: string): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/company/coupCat/"+ category + "/" + sessionStorage.token);

  }

  //Checked
  public getCompanyCouponsPrice(price: number): Observable<Coupon[]>{

    return this.client.get<Coupon[]>("http://localhost:8080/company/coupPrice/" + price + "/" + sessionStorage.token);

  }

  //maube delete
  public getCompanyDetails(): Observable<Company>{

    return this.client.get<Company>("http://localhost:8080/company/" + sessionStorage.token)

  }

}

