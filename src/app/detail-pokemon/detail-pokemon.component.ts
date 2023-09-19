import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../mock-pokemon-list';
import { Pokemon } from '../pokemon';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent  implements OnInit {
  pokemonList:Pokemon[]
  pokemon:Pokemon | undefined
  constructor(private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    this.pokemonList = POKEMONS
    const pokemonId:number = Number(this.route.snapshot.paramMap.get("id"))
    this.pokemon = this.pokemonList.find((pokemon => pokemon.id === pokemonId))
  }
  goToPokemonList() {
    this.router.navigate(["/pokemons"])
  }
}
