import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
@Component({
  selector: 'app-root',
  templateUrl:"app.component.html",
  styleUrls:["app.component.scss"]
})
export class AppComponent implements OnInit {
  pokemonList:Array<Pokemon> = POKEMONS
  pokemonSelected : Pokemon|undefined

  ngOnInit() {
    console.table(this.pokemonList)
  }
  selectPokemon(pokemonId:string) {
    const id = +pokemonId
    const pokemon : Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id === id)
    if(pokemon) {
      console.log(`Vous avez demander le pokemon : ${pokemon.name}`);
      this.pokemonSelected = pokemon
    } else {
      console.log(`Vous avez demandé un pokemon qui n'existe pas`);
      this.pokemonSelected = pokemon
    }
    
  }
}
