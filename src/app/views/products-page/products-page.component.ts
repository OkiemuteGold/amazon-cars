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
  allManufacturer: any;

  minPrice: any = 10000;
  maxPrice: any = 46000;
  minValue: any;
  maxValue: any;
  isMinGreaterThanMax: boolean = false;

  updateView(view: any) {
    this.viewMode = view;
  }

  searchCar(event: any) {
    let initCars = this.carService.getAllCars();
    
    let allCars = initCars.filter((car: any) => {
      let name = event.target.value;
      console.log(car.name, name);

      return car.name == name;
    });

    this.allCars = allCars;
  }

  updateMinPrice(minInput: any) {
    this.minValue = minInput.value;
    this.filterByPrice();
  }

  updateMaxPrice(event: any) {
    this.maxValue = event.target.value;
    this.filterByPrice();
  }

  filterByPrice() {
    const initCars = this.carService.getAllCars();
    
    let allCars = initCars.filter((car: any) => {
      let filtered,
        price = Math.floor(car.price), 
        min = Number(this.minValue), 
        max = Number(this.maxValue);

      if (!this.isMinGreaterThanMax) {
        filtered = (price >= min && price <= max);
      } else {
        filtered = (price >= min);
      }

      // console.log(price, min, max);
      return filtered;
    });

    allCars = allCars.sort((a, b) => {
      return a.price < b.price ? -1 : 1;
    });

    this.allCars = allCars;

    this.minValue >= this.maxValue ?
      this.isMinGreaterThanMax = true : 
      this.isMinGreaterThanMax = false;

    if (this.minValue == this.minPrice && this.maxValue == this.minPrice) {
      this.isMinGreaterThanMax = false;
    }
  }

  /* remove duplicate and return firm name once */
  eliminateDuplicateNames (cars: any) {
    let allManufacturer = [];
    for (let i = 0; i < cars.length; i++) {
      if (
        allManufacturer.indexOf(cars[i].manufacturer) ===
        -1
      ) {
        allManufacturer.push(cars[i].manufacturer);

        allManufacturer = allManufacturer.sort((a, b) => {
          return a.manufacturer < b.manufacturer ? 1 : -1;
        });
      }
    }
    
    return this.allManufacturer = allManufacturer;
  }

  getManufacturers() {
    const allCars = this.carService.getAllCars();
    this.eliminateDuplicateNames(allCars);
  }

  filterByManufacturer(event: any) {
    const initCars = this.carService.getAllCars();
    
    let allCars = initCars.filter((car: any) => {
      const manufacturer = event.target.innerText;
      return car.manufacturer == manufacturer;
    });

    allCars = allCars.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });

    this.allCars = allCars;
  }

  resetCars() {
    this.allCars = this.carService.getAllCars();
  }

  resetFilter() {
    this.minValue = this.minPrice;
    this.maxValue = this.maxPrice;
    this.isMinGreaterThanMax = false;
    this.resetCars();
  }

  constructor(service: AllCarsService) {
    this.carService = service;
  }

  // ngOnChanges(changes: SimpleChanges): void { }

  ngOnInit(): void {
    this.resetFilter();
    this.getManufacturers();
  }

}
