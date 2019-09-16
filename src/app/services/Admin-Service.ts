import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';

@Injectable({
    providedIn: 'root'
})
export class AdminsService {

    constructor(private client: HttpClient) { }

    //Checked
    public addCompany(company: Company): Observable<Company>{

        return this.client.post<Company>("http://localhost:8080/admin/compAdd/" + sessionStorage.token, company);

    }
    
    //Checked
    public updateCompany(company: Company): Observable<Company>{

        return this.client.put<Company>("http://localhost:8080/admin/compUpd/" + sessionStorage.token, company);

    }

    //Checked
    public deleteCompany(id: number): Observable<Company>{

        return this.client.delete<Company>("http://localhost:8080/admin/compDel/" + id + "/" + sessionStorage.token);

    }

    //Checked
    public getOneCompany(id: number): Observable<Company>{

        return this.client.get<Company>("http://localhost:8080/admin/comp/" + id + "/" + sessionStorage.token)

    }

    public getAllCompanies(): Observable<Company[]>{

        return this.client.get<Company[]>("http://localhost:8080/admin/compAll/" + sessionStorage.token)

    }

    //Checked
    public addCustomer(customer: Customer): Observable<Customer>{

        return this.client.post<Customer>("http://localhost:8080/admin/custAdd/" + sessionStorage.token, customer);

    }

    //Checked
    public updateCustomer(customer: Customer): Observable<Customer>{

        return this.client.put<Customer>("http://localhost:8080/admin/custUpd/" + sessionStorage.token, customer);

    }

    //Checked
    public deleteCustomer(id: number): Observable<Customer>{

        return this.client.delete<Customer>("http://localhost:8080/admin/custDel/" + id + "/"  + sessionStorage.token);

    }

    //Checked
    public getOneCustomer(id: number): Observable<Customer>{

        return this.client.get<Customer>("http://localhost:8080/admin/cust/" + id + "/" + sessionStorage.token);

    }

    public getAllCustomers(): Observable<Customer[]>{

        return this.client.get<Customer[]>("http://localhost:8080/admin/custAll/" + sessionStorage.token)

    }


}


