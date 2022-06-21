import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PokemonModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './pokemons/in-memory-data.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, //Demarrage de l'appli + Outils Angular (directives, interpolation, event..)
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonModule,
    LoginRoutingModule,
    AppRoutingModule //Puis le routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
