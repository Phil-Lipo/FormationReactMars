export interface IPokemonProps {
  id: number;
}

export interface IPokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
}
