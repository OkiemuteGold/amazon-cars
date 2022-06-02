import { Component, OnInit } from '@angular/core';
import { AllCarsService } from "../../all-services/all-cars/all-cars.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  allCars: any = [];
  carsService: any;
  viewMode = 'grid';

  updateView(view: any) {
    // console.log(view);
    this.viewMode = view;
  }

  constructor(service: AllCarsService) {
    this.carsService = service;
    this.allCars = service.getAllCars();
  };

  ngOnInit(): void {
    // console.log(this.allCars);
  }

}
