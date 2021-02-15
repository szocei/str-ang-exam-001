import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { BehaviorSubject } from 'rxjs';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(
    private heroService:HeroService,
  ) { }

heroList$: BehaviorSubject<Hero[]>=this.heroService.list$;


  ngOnInit(): void {
    this.heroService.getAll();
  }

}
