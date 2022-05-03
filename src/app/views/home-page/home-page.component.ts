import { Component, OnInit } from '@angular/core';
import { AllCarsService } from "../../all-services/all-cars/all-cars.service";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  first = '';
  second = 'View All Cars';
  
  allCars: any = [];
  carsService: any;
  viewMode = 'grid';

  // updateView(view: any) {
  //   console.log(view);
  //   return view
  // }

  constructor(service: AllCarsService) {
    this.carsService = service;
    this.allCars = service.getAllCars();
  };

  ngOnInit(): void {
    // console.log(this.allCars);
  }

}
