import { Injectable } from '@nestjs/common';
import { pokedex } from './constants';
import { Pokemon } from './models/pokemon.model';

@Injectable()
export class PokemonService {
  private _pokemonList: Pokemon[] = pokedex;

  getPokemonList(): Pokemon[] {
    return this._pokemonList;
  }
}
