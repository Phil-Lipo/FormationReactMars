import React from "react";
import styles from "./Pokemon.module.scss";
import { IPokemonProps } from "./Pokemon.model";
import { usePokemon } from "./Pokemon.hook";

/*
  Ce composant sert à charger et à afficher les informations d'un Pokemon
  sous la forme d'une carte.
  Il prend une prop "id" et fait un appel à l'API de Pokeapi en utilisant cet id lorsqu'il est monté.
  Il affiche "Loading" pendant le chargement, puis les informations du Pokemon dès que l'appel API est fini.
*/

export function Pokemon({ id }: IPokemonProps) {
  const { data, error } = usePokemon(id);

  return (
    <div className={styles.pokemonCard}>
      {error !== null && (
        <div className="error">
          <strong>Error loading Pokemon n°{id}.</strong>
          <br />
          {error}
        </div>
      )}

      {data === null && error === null && (
        <strong>Loading Pokemon n°{id}...</strong>
      )}

      {data !== null && (
        <>
          <h1>{data.name}</h1>
          <h2>Pokemon n°{id}</h2>
          <img src={data.sprites.front_default} alt="Sprite" />
          <div className="attributes">
            Height: {data.height}
            <br />
            Weight: {data.weight}
          </div>
        </>
      )}
    </div>
  );
}
