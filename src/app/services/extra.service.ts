import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coupon } from '../Models/Coupon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor(private client: HttpClient) { }

  public getOneCoupon(id: number) :Observable<Coupon>{

    return this.client.get<Coupon>("http://localhost:8080/customer/getOneCoup/" + id + "/" + sessionStorage.token);

  }

}
