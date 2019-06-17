import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { myHero } from '../myhero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Gamora',
    details: 'Gamora é uma guerreira treinada, cuja vida sob a ira tortuosa de seu pai adotivo Thanos a leva a se voltar contra ele. Percebendo que o universo está ameaçado pelas poderosas pedras do infinito, ela pega o manto de Guardiã da Galaxia.'
  };

  myhero: myHero = {
    id: 1,
    name: 'Nebulosa',
    details: 'A feroz guerreira Nebulosa é a filha adotiva de Thanos e a “irmã” de Gamora. Quando o Titã Louco criou suas “filhas”, ele treinou os dois em combate, muitas vezes forçando-os a enfrentar um ao outro.'
  }

  constructor() { }

  ngOnInit() {
  }

}
