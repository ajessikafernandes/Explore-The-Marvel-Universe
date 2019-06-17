import { Component, OnInit } from '@angular/core';
import { Hero } from '../myhero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  myhero: Hero = {
    id: 0,
    heroName: '',
    name: '',
    details: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
