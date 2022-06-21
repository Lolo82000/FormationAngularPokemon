import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['./edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _pokemonService: PokemonService) { }

  public pokemon: Pokemon = null;
  private routeSub : Subscription;


  ngOnInit(): void {
    let id: number;
        
    this.routeSub = this.route.params.subscribe(params => {
        id = params['id'];
        //Avec ARRAY 
        //this.pokemon = this._pokemonService.getPokemon(id);
        //Avec Observable
        this._pokemonService.getPokemon(id).subscribe(data => {
          this.pokemon = data;
      })
    });
  }

}
