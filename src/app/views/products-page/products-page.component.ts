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
  carService: AllCarsService;

  minPrice: any = 10000;
  maxPrice: any = 46000;
  isMinGreaterThanMax: boolean = false;

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

    if(this.minPrice >= this.maxPrice) {
      this.isMinGreaterThanMax = true;
    } else {
      this.isMinGreaterThanMax = false;
    }
  }

  resetFilter() {
    this.minPrice = 10000;
    this.maxPrice = 46000;
    this.isMinGreaterThanMax = false;
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
