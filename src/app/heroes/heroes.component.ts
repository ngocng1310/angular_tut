import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

// always export the component class, so you can import elsewhere like in the AppModule
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // constructor is used to import or initialize services
  // when angular creates a HeroesComponent, the Depedency Injection system
  // sets the heroService parameter to the singleton instance of HeroService
  constructor(private heroService: HeroService) { }

  // life cycle method which is called shortly after creating a component
  // a good place to put initialization logic
  ngOnInit() {
    this.getHeroes();
  }

  // get Heroes
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(herores => this.heroes = herores);
  }

}
