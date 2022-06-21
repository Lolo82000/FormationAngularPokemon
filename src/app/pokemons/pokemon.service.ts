import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { POKEMONS } from "./mock-pokemons";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {

    private pokemonUrl = 'api/pokemons';

    constructor(private http: HttpClient) { } //Le http retourne un observable rechercher RxJS Marbles
    //site web documentation: https://www.learnrxjs.io/

    //retourne un array
    /*getPokemons(): Pokemon[] {
        return POKEMONS;
    }*/

    getPokemons(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(this.pokemonUrl) //On renvoit un abonnement de mon observable
    }

    //En utilisant l'array
    /*getPokemon(id: number) : Pokemon {
        let pokemons = this.getPokemons();
        return pokemons.find(x => x.id == id);
    }*/

    //En utilisant l'observable
    getPokemon(id: number): Observable<Pokemon> {
        var url = `${this.pokemonUrl}/${id}`;
        return this.http.get<Pokemon>(this.pokemonUrl + '/' + id);

    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = { // peut-être rajouter dans le app.moduke en HTTP_INTERCEPTOR qui sera valable pour tous les GETTER et SETTER
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this.http.put<Pokemon>(this.pokemonUrl, pokemon, httpOptions);
    }

    deletePokemon(id: number): Observable<Pokemon> {
        const httpOptions = { // peut-être rajouter dans le app.moduke en HTTP_INTERCEPTOR qui sera valable pour tous les GETTER et SETTER
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        }

        return this.http.delete<Pokemon>(this.pokemonUrl + '/' + id , httpOptions);
    }


    getPokemonTypes(): Array<string> {

        return [
            'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
            'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
        ];
    }

    searchPokemons(term: string) : Observable<Pokemon[]> {
        if(!term.trim()) 
            return of([]);
        return this.http.get<Pokemon[]>(`api/pokemons?name=${term}`)

    }
}