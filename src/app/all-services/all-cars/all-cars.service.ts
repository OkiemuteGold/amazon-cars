import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AllCarsService {
  getAllCars() {
    return [
      {
        id: 1,
        name: 'Honda Accord',
        tag: "Office car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "22000.564",
        manufacturer: 'Honda',
        releaseDate: new Date(2022, 3, 14)
      },
      {
        id: 2,
        name: 'Venza',
        tag: "Family car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "12000.55",
        manufacturer: 'Toyota',
        releaseDate: new Date(2022, 3, 14)
      },
      {
        id: 3,
        name: 'Toyota Avalon',
        tag: "Classy car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "36000.855",
        manufacturer: 'Toyota',
        releaseDate: new Date(2022, 3, 14)
      },
      {
        id: 4,
        name: 'Rose Royce',
        tag: "Sporty car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "45000.975",
        manufacturer: 'Toyota',
        releaseDate: new Date(2022, 3, 14)
      },
      {
        id: 5,
        name: 'Camry',
        tag: "Family car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "17000.5",
        manufacturer: 'Toyota',
        releaseDate: new Date(2022, 3, 14)
      },
      {
        id: 6,
        name: 'Porsche',
        tag: "Sporty car",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab earum architecto.",
        rating: "4.546",
        price: "20000.750",
        manufacturer: 'Toyota',
        releaseDate: new Date(2022, 3, 14)
      },
    ]
  };

  constructor() { }
}
