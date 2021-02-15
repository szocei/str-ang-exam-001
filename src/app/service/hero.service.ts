import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';




@Injectable({
  providedIn: 'root'
})
export class HeroService {

  list: Hero[] = [{ id: 1, name: 'Superman', superPower: 'flying', address: 'San Francisco' },
       { id: 2, name: 'Batman', superPower: 'action', address: 'Gotham'    },
       { id: 3, name: 'THE HULK', superPower: 'powerful', address: 'New York'  },
       { id: 4,name: 'Flash',superPower: 'fast',address: 'Central City PD'  },
      {id: 5,name: 'BLACK PANTHER',superPower: 'speed',address: 'Wakanda'  },
      {id: 6,name: 'SPIDER-MAN',superPower: 'clamber',address: 'Los Angeles'   },
       {id: 7,name: 'WONDER WOMAN',superPower: 'jump',address: 'Chicago'  },
      {id: 8,name: 'WOLVERINE',superPower: 'stomach',address: 'Canada'  },
      {id: 9,name: 'Aquaman',superPower: 'swim',address: 'ocean'  },
      {id: 10,name: 'Iron Man',superPower: 'fire',address: 'Boston'   }
    ];

 constructor() { }

 list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
 

  getAll():void{
    this.list$.next(this.list);
  }
}
