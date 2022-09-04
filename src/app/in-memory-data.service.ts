import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb(){
    const heroes: Hero[] = [
      { id: 1, name: 'Webstorm' },
      { id: 2, name: 'Pegasus' },
      { id: 3, name: 'Venus' },
      { id: 4, name: 'Magneta' },
      { id: 5, name: 'Dinoman' },
      { id: 6, name: 'Dynamite' },
      { id: 7, name: 'Flux' },
      { id: 8, name: 'Magma' },
      { id: 9, name: 'Tornado' }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }

}
