import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/carDetailDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carDto: CarDetailDto[] = []
  dataLoaded=false
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute,private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      } else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getCarDetails()
      }
    })
  }
  getCarDetails() {
    this.carService.getCarDetails().subscribe(response => {
      this.carDto = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.carDto = response.data
      this.dataLoaded = true;
    })
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.carDto = response.data
      this.dataLoaded=true
    })
  }
  pathFix(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url)
  }
}
