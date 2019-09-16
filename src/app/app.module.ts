import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { ContactComponent } from './components/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { GetAllCustomersComponent } from './components/admin/get-all-customers/get-all-customers.component';
import { GetAllCompaniesComponent } from './components/admin/get-all-companies/get-all-companies.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { GetCompanyCouponsComponent } from './components/company/get-company-coupons/get-company-coupons.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { GetPurchasedCouponsComponent } from './components/customer/get-purchased-coupons/get-purchased-coupons.component';
import { GetPurchasedCouponsCategoryComponent } from './components/customer/get-purchased-coupons-category/get-purchased-coupons-category.component';
import { GetPurchasedCouponsPriceComponent } from './components/customer/get-purchased-coupons-price/get-purchased-coupons-price.component';
import { LoginTabComponent } from './components/login-tab/login-tab.component';
import { CompaniesComponent } from './components/admin/companies/companies.component';
import { CustomersComponent } from './components/admin/customers/customers.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    Page404Component,
    AddCompanyComponent,
    CouponsComponent,
    ContactComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    DeleteCompanyComponent,
    UpdateCompanyComponent,
    GetOneCustomerComponent,
    GetAllCustomersComponent,
    GetAllCompaniesComponent,
    GetOneCompanyComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    GetCompanyCouponsComponent,
    CompanyDetailsComponent,
    PurchaseCouponComponent,
    GetPurchasedCouponsComponent,
    GetPurchasedCouponsCategoryComponent,
    GetPurchasedCouponsPriceComponent,
    LoginTabComponent,
    CompaniesComponent,
    CustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
