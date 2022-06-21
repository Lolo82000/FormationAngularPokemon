import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { DetailPokemonComponent } from './detail-pokemon.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { ListPokemonComponent } from './list-pokemon.component';

//Sans AuthGuardService
/*const PokemonRoutes: Routes = [
  { path: 'pokemons', component: ListPokemonComponent},
  { path: 'pokemon/edit/:id', component: EditPokemonComponent},
  { path: 'pokemon/:id', component: DetailPokemonComponent},
]; */

//Avec AuthGuardService
const PokemonRoutes: Routes = [
  { 
    path: 'pokemon', 
    canActivate: [AuthGuardService],
    children: [
      { path: 'all', component: ListPokemonComponent},
      { path: 'edit/:id', component: EditPokemonComponent},
      { path: ':id', component: DetailPokemonComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PokemonRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
