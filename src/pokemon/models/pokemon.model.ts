export interface Pokemon {
  id: number
  name: PokemonLangName
  type: string[]
  species: string
  description: string
  evolution: Evolution
  profile: PokemonProfile
  image: PokemonImage
}

export interface PokemonLangName {
  english: string
  japanese: string
  chinese: string
  french: string
}

export interface Evolution {
  prev?: string[];
  next?: string[][];
}

export interface PokemonProfile {
  height: string
  weight: string
  gender: string
  ability: string[][]
}

export interface PokemonImage {
  sprite?: string
  thumbnail?: string
  hires?: string
}
