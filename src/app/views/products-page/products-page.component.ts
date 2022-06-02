import { Component, OnInit } from '@angular/core';
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
  minPrice: any = this.minValue;
  maxPrice: any = this.maxValue;

  updateView(view: any) {
    this.viewMode = view;
  }

  updateMinPrice(event: any) {
    this.minPrice = event.target.value;
    this.filterCarsByPrice();
  }

  updateMaxPrice(event: any) {
    this.maxPrice = event.target.value;
    this.filterCarsByPrice();
  }

  filterCarsByPrice() {
    this.allCars.filter((car: any) => {
      car.price == this.minPrice || car.price == this.maxPrice
    })
  }

  constructor(service: AllCarsService) {
    this.allCars = service.getAllCars();
  }

  ngOnInit(): void {
  }

}
