import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
//import { POKEMONS } from "./mock-pokemons"; //Maintenant gérer par le service
import { Pokemon } from "./pokemon";
import { PokemonService } from "./pokemon.service";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './detail-pokemon.component.html'
})
export class DetailPokemonComponent implements OnInit, OnDestroy {
    constructor(private route: ActivatedRoute, private router: Router, private _pokemonService: PokemonService) {}

    public pokemons: Pokemon[];
    public pokemon: Pokemon;
    private routeSub : Subscription;

    ngOnInit() {
       // this.pokemons = POKEMONS;
        let id: number;
        
        this.routeSub = this.route.params.subscribe(params => {
            // Code
            id = params['id'];
          /*  for (let index = 0; index < this.pokemons.length; index++) {
                if (this.pokemons[index].id == id) {
                    this.pokemon = this.pokemons[index];
                }
            } */
            //Version TypeScript du FOR ci-dessus
            //this.pokemon = this.pokemons.find(x => x.id == id);
            //Ci-dessous retourne un array
            //this.pokemon = this.pokemons.filter(x => x.id == id)[0];
            this._pokemonService.getPokemon(id).subscribe(data => {
                this.pokemon = data;
            })
        });
    }

    goBack(): void{
        this.router.navigate(['pokemon/all']);
    }

    goEdit(pokemon: Pokemon) {
        let link =  ['/pokemon/edit', pokemon.id];
        this.router.navigate(link);
    }

    //goDelete(pokemon: Pokemon) {
    goDelete(PokemonId: number) {
       // With ARRAY
       // let link =  ['/pokemon/edit', pokemon.id];
       // this.router.navigate(link);
       this._pokemonService.deletePokemon(PokemonId).subscribe(() => {
        console.log("DELETE OK !");
        this.goBack();
      }, err => {
        //GESTION DES ERREURS
      })
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}