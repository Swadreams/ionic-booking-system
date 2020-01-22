import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'New York',
      'In the heart of New York City',
      'https://image.businessinsider.com/5d0150e06fc9200b5a05f042?width=1100&format=jpeg&auto=webp',
      150.99
    ),
    new Place(
      'p2',
      'Amour Tajoiur',
      'Romantic place in Paris',
      'https://static.amazon.jobs/locations/58/thumbnails/NYC.jpg?1547618123',
      139.99
    ),
    new Place(
      'p3',
      'The foggy place',
      'Not your average city trip.',
      'https://cdn.getyourguide.com/img/tour_img-1096032-146.jpg',
      99.99
    ),
  ];

  get places() {
    return [...this._places];
  }
  constructor() { }
}
