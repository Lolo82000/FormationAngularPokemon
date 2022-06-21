import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
   
  }

}

/* OLD 
import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title: string = 'ma liste de pokémon';
  isSpecial: boolean = false;
  saisie: string = '';
  public pokemons: Pokemon[];

  ngOnInit() {
    this.pokemons = POKEMONS;
    console.log(this.pokemons)
  }

  onClickTest(){
    console.log('CLICK');
  }

  onKey($event: any){
    this.saisie = $event.target.value;
  }

  selectPokemon(pokemon: Pokemon){
    console.log(pokemon.name);
  }
*/
