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
  index: Number | undefined;

  allCategories = [
    {
      title: 'Summary',
      link: 'summary'
    },
    {
      title: 'Feature',
      link: 'feature'
    },
    {
      title: 'Demo',
      link: 'demo'
    },
    {
      title: 'Schedule',
      link: 'schedule'
    },
    {
      title: 'Purchase',
      link: 'purchase'
    },
  ]

  tabCategory = 'summary';

  constructor(private route: ActivatedRoute, service: AllCarsService) {
    this.allCars = service.getAllCars();
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = routeParams.get('productId');

    // Find the product that correspond with the id provided in route.
    this.product = this.allCars.find(
      (product: any) => product.link === productIdFromRoute
    );

    this.index = this.product.id - 1;

    // console.log(this.allCars, routeParams, productIdFromRoute, this.product);
  }
}
