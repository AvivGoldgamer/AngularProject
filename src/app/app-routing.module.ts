import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { GetCompanyCouponsComponent } from './components/company/get-company-coupons/get-company-coupons.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { CompaniesComponent } from './components/admin/companies/companies.component';
import { CustomersComponent } from './components/admin/customers/customers.component';
import { GetPurchasedCouponsComponent } from './components/customer/get-purchased-coupons/get-purchased-coupons.component';


const routes: Routes = [

  {path:"home", component: HomeComponent},
  {path:"coupons", component: CouponsComponent},
  {path:"register", component: LoginComponent},
  //{path:"contact", component: ContactComponent},
  //{path:"about", component: AboutComponent},
  
  //Admin tabs:

  {path:"addComp", component: AddCompanyComponent},
  {path:"updateComp", component: UpdateCompanyComponent},
  {path:"companies", component: CompaniesComponent},
  {path:"addCust", component: AddCustomerComponent},
  {path:"updateCust", component: UpdateCustomerComponent},
  {path:"customers", component:CustomersComponent},
  

  //Company tabs:

  {path:"addCoup", component: AddCouponComponent},
  {path:"updateCoup", component: UpdateCouponComponent},
  {path:"getCompCoup",component:GetCompanyCouponsComponent},

  //Customer tabs:

  {path:"getPurchasedCoupons", component:GetPurchasedCouponsComponent},


  //etc tabs:
  
  {path:"**", component:Page404Component}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
