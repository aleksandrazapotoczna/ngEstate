import { Injectable } from '@angular/core';
import { Investment } from '../models/investments.model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentsService {
  investments: Investment[] = [
    {
      id: 1,
      image: 'assets/images/block-1.jpg',
      name: 'Green Districts Eco Apartments',
      location: 'Katowice, A. Vetulaniego street',
      apartments: 245,
      reserved: 150,
      price: 9700,
    },
    {
      id: 2,
      image: 'assets/images/block-2.jpg',
      name: 'Eco New City Apartments',
      location: 'Katowice, A. Vetulaniego street',
      apartments: 360,
      reserved: 180,
      price: 10500,
    },
    {
      id: 3,
      image: 'assets/images/block-3.jpg',
      name: 'New Modern Apartments',
      location: 'Katowice, A. Vetulaniego street',
      apartments: 320,
      reserved: 100,
      price: 9900,
    },
  ];

  constructor() {}
}
