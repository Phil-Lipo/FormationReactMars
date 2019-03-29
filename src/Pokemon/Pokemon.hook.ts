import { useState, useEffect } from "react";
import { IPokemon } from "./Pokemon.model";
import axios from "axios";

export function usePokemon(id: number) {
  const [data, setData] = useState<IPokemon | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(
    () => {
      // Reset states
      setData(null);
      setError(null);
      // API call
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        // Midification du state avec la réponse de l'API
        .then(apiResult => setData(apiResult.data))
        // Gestion des erreurs
        .catch(apiError => setError(apiError.message));
    },
    [id]
  );

  return { data, error };
}
