import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { CarDetailDto } from '../models/carDetailDto';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) { }
  apiUrl = "https://localhost:44329/api/"
  
  getCarDetails(): Observable<ListResponseModel<CarDetailDto>>{
    let newPath=this.apiUrl+"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcarsdetailbybrandid?brandId=" + brandId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcarsdetailsbycolorid?colorId=" + colorId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailById(carId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newPath = this.apiUrl + "cars/getcardetailbyid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath)
  }
}
