import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllCarsService } from '../../all-services/all-cars/all-cars.service';
// import { Product, products } from '../products-page';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  allCars: any = [];
  product: any | undefined;

  constructor(private route: ActivatedRoute, service: AllCarsService) {
    this.allCars = service.getAllCars();
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = this.allCars.find(
      (product: { id: number }) => product.id === productIdFromRoute
    );
  }
}
