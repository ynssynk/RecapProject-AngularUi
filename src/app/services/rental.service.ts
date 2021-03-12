import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';
@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44329/api/rentals/getrentaldetails"
  constructor(private httpClient: HttpClient) { }
  
  getRentalDetails(): Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
