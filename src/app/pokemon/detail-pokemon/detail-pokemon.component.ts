import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss'],
})
export class DetailPokemonComponent  implements OnInit {
  pokemonList:Pokemon[]
  pokemon:Pokemon | undefined
  constructor(private route:ActivatedRoute, private router:Router, private pokemonService:PokemonService) {}

  ngOnInit() {
    const pokemonId:number = Number(this.route.snapshot.paramMap.get("id"))
    this.pokemon = this.pokemonService.getPokemonById(pokemonId)
  }
  goToPokemonList() {
    this.router.navigate(["/pokemons"])
  }
}
