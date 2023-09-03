import React, { useEffect, useRef, useState } from "react";
import "../css/browser-game.css";
import styled from "styled-components";
import { Layout } from "../components/Layout";
import ZenSays from "../components/ZenSays";
import { SEOHead } from "../components/SEOHead";

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GameCanvas = styled.canvas`
  max-width: 100%;
`;

const FullscreenButton = styled.button`
  margin-top: 25px;
  padding: 10px 20px;
  background-color: rgb(85, 190, 225);
  color: #fff;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const MainGameInformation = styled.div`
  @media (max-width: 500px) {
    p.game-compatible {
      display: none;
    }

    p.game-not-compatible {
      display: block;
    }
  }

  @media (min-width: 500px) {
    p.game-compatible {
      display: block;
    }

    p.game-not-compatible {
      display: none;
    }
  }
`;

export default function BrowserGame() {
  const gameCanvasRef = useRef<HTMLCanvasElement>(null);

  const gameIntro = (
    <p>
      Wow, this game was created way back in university as one of my first
      programming assignments. It's still a pretty fun project to revisit and
      play around with. Game development is very difficult and a great way to
      learn the ropes of programming. 🕹️
    </p>
  );

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../bluehat/processing.reactified.min.js";
    script.async = false;
    document.body.appendChild(script);
    gameCanvasRef.current?.focus();
  }, []);

  return (
    <Layout>
      <GameContainer>
        <ZenSays
          content={
            <MainGameInformation>
              {gameIntro}
              <p className={"game-compatible"}>
                This is a small game fully playable in your browser (1-2
                players). The purpose of the game is to survive and accumulate
                points for as long as possible. You have 2 types of obstacles in
                your way: enemies and the time limit. Enemies can simply be
                avoided, while you have to extend the time limit yourself by
                collecting green clocks.
              </p>
              <p className={"game-not-compatible"}>
                <b>
                  Your browser window seems to be pretty small.. If you are on
                  mobile, please know that only keyboard controls are supported.
                </b>
              </p>
            </MainGameInformation>
          }
        />
        <h1>Browser Game</h1>
        <GameCanvas
          ref={gameCanvasRef}
          data-processing-sources="../bluehat/bluehat.pde"
          width="1280"
          height="720"
        />
        <FullscreenButton
          onClick={() => gameCanvasRef.current?.requestFullscreen()}
        >
          Enable Fullscreen
        </FullscreenButton>
        <i>
          Assets retrieved from{" "}
          <a href="https://opengameart.org/">Open Game Art</a>
        </i>
      </GameContainer>
    </Layout>
  );
}

export const Head = () => <SEOHead />;
