import { Controller, Get } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './models/pokemon.model';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get('list-all')
  getAllPokemon(): Pokemon[] {
    return this.pokemonService.getPokemonList();
  }

}
