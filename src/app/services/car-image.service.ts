import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:44329/api/"
  constructor(private httpClient:HttpClient) { }
  
  getCarImages(): Observable<ListResponseModel<CarImage>>{
    let newPath = this.apiUrl + "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
  getImagesByCarId(carId: number):Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + "carimages/getimagesbycarid?carId=" + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
