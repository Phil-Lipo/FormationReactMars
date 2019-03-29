import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useTranslate } from "./i18n";

export const StyledCounter = styled.div`
  margin: 30px;
  p {
    font-size: 1.5em;
    font-weight: bold;
    margin-bottom: 5px;
  }
  button {
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    background-color: #ff99;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      background-color: yellow;
    }
  }
`;

export default function Counter() {
  // Chrono en ms
  const [timer, setTimer] = useState(0);
  // Play/pause
  const [pause, setPause] = useState(true);
  // Id d'interval
  const intervalId = useRef(0);
  // Traduction
  const translate = useTranslate();

  useEffect(
    () => {
      if (!pause) {
        // Démarrage du timer
        intervalId.current = window.setInterval(
          () => setTimer(t => t + 10),
          10
        );
      }
      // Clear quand l'effect se termine (démontage du composant ou toggle de pause)
      return () => clearInterval(intervalId.current);
    },
    // On exécute l'effect à chaque fois que "pause" change
    [pause]
  );

  // On utilise useCallback pour mettre en cache les fonctions,
  // afin de ne pas déclencher inutilement des renders des buttons
  const handleTogglePause = useCallback(() => setPause(p => !p), []);
  const handleStop = useCallback(() => {
    clearInterval(intervalId.current);
    setPause(true);
    setTimer(0);
  }, []);
  const handlePlus10 = useCallback(() => setTimer(t => t + 10000), []);

  return (
    <StyledCounter>
      <p>
        {Math.floor(timer / 1000)}.{Math.floor((timer % 1000) / 10)}
      </p>
      <Button onClick={handleTogglePause}>
        {translate(pause ? "counter.play" : "counter.pause")}
      </Button>
      <Button onClick={handleStop}>{translate("counter.stop")}</Button>
      <Button onClick={handlePlus10}>{translate("counter.plus10")}</Button>
    </StyledCounter>
  );
}
