import { Controller, Get } from '@nestjs/common';
import { Pokemon } from './models';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService) {}

  @Get('list-all')
  getAllPokemon(): Pokemon[] {
    return this.pokemonService.getPokemonList();
  }
}
