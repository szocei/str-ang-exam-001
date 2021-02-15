import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../service/hero.service';
import { BehaviorSubject } from 'rxjs';

import { Input } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
phrase:string="";
  constructor(
    private heroService:HeroService,
  ) { }

heroList$: BehaviorSubject<any>=this.heroService.list$;


  
  
  ngOnInit(): void {
    this.heroService.getAll();
  }

 
columnKey:string='';
onColumnSelect(key:string):void{
  this.columnKey=key;}

  onChangePhrase(event:Event): void{
this.phrase = (event.target as HTMLInputElement).value;
}

}
