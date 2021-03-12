import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CustomerResponseModel } from '../models/customerResponseModel';
import { CustomerDetailDto } from '../models/customerDetailDto';
import { Customer } from '../models/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44329/api/customers/getall"
  apiUrlDto="https://localhost:44329/api/customers/getcustomerdetails"
  constructor(private httpClient: HttpClient) { }
  
  getCustomers():Observable<CustomerResponseModel> {
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl)
  }
  getCustomerDetails(): Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrlDto)
  }
}
