import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetail: CarDetailDto;
  carImagePath: CarImage[]
  imageUrl: "https://localhost:44329/images/";
  constructor(private carImageService:CarImageService,private carService:CarService,private activatedRoute:ActivatedRoute,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["carId"]) {
        this.getCarDetailById(params["carId"])
        this.getImagesByCarId(params["carId"])
      }
    })
  }
  getCarDetailById(carId:number) {
    this.carService.getCarDetailById(carId).subscribe(response => {
      this.carDetail=response.data[0]
    })
  }
  getImagesByCarId(carId: number) {
    this.carImageService.getImagesByCarId(carId).subscribe(response => {
      this.carImagePath=response.data
    })
  }
  pathFix(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
