import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { CustomerDetailDto } from '../models/customerDetailDto';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = "https://localhost:44329/api/customers/getall"
  apiUrlDto="https://localhost:44329/api/customers/getcustomerdetails"
  constructor(private httpClient: HttpClient) { }
  
  getCustomers():Observable<ListResponseModel<CustomerDetailDto>> {
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrl)
  }
  getCustomerDetails(): Observable<ListResponseModel<CustomerDetailDto>>{
    return this.httpClient.get<ListResponseModel<CustomerDetailDto>>(this.apiUrlDto)
  }
}
