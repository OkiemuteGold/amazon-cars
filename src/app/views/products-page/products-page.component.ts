import { Component, OnInit } from '@angular/core';
// import { SimpleChanges } from '@angular/core';
import { AllCarsService } from "../../all-services/all-cars/all-cars.service";

@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {
  viewMode = 'grid';
  allCars: any = [];

  minValue = 10000;
  maxValue = 46000;
  minPrice: Number = this.minValue;
  maxPrice: Number = this.maxValue;
  carService: AllCarsService;

  updateView(view: any) {
    this.viewMode = view;
  }

  updateMinPrice(minInput: any) {
    let price = this.minPrice = minInput.value;
    this.filterCarsByPrice(price);
  }

  updateMaxPrice(event: any) {
    this.maxPrice = event.target.value;
    
    // this.allCars = this.allCars.filter((car: any) => {
    //   if (Math.floor(car.price) <= Number(this.maxPrice)) {
    //     console.log(Math.floor(car.price), Number(this.maxPrice));
    //     return car
    //   } else {
    //     console.log("false");
    //   }
    // });

    this.filterCarsByPrice(this.maxPrice);
  }

  filterCarsByPrice(price: any) {
    let allCars = this.allCars.filter((car: any) => {
      return Math.floor(car.price) <= Number(price);
    });

    this.allCars = allCars;
  }

  resetFilter() {
    this.minPrice = this.minValue;
    this.maxPrice = this.maxValue;
    this.allCars = this.carService.getAllCars();
  }

  constructor(service: AllCarsService) {
    this.carService = service;
    this.allCars = service.getAllCars();
  }

  // ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void {
  }

}
