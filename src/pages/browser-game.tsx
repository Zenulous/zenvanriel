import React from "react";
import {RouteComponentProps} from "@reach/router";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import Button from "@material-ui/core/Button";
import scriptjs from "scriptjs";
import "../css/browser-game.css";

export default class BrowserGame extends React.Component<RouteComponentProps> {
  gameCanvas: HTMLCanvasElement;

  state = {
    showGame: false,
  };

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    scriptjs("bluehat/processing.reactified.min.js", () => {});
    window.addEventListener("resize", this.handleShowGameState.bind(this));
    this.handleShowGameState();
  }

  componentDidUpdate() {
    if (this.state.showGame) {
      let scaler = document.documentElement.clientWidth / 1600;
      if (scaler > 0.85) {
        scaler = 0.85;
      }
      this.gameCanvas.style.transform = `scale(${scaler}, ${scaler})`;
      this.gameCanvas.style.transformOrigin = "top left";
      this.gameCanvas.style.display = "block";
    } else {
      this.gameCanvas.style.display = "none";
    }
  }

  handleShowGameState() {
    const windowThreshold = 500;
    if (document.documentElement.clientWidth < windowThreshold) {
      this.setState({showGame: false});
      return;
    }

    if (document.documentElement.clientWidth > windowThreshold) {
      this.setState({showGame: true});
    }
  }

  render() {
    const mainGameWindow = this.state.showGame ? (
      <div>
        <p>
          This is a small game fully playable in your browser (1-2 players). The
          purpose of the game is to survive and accumulate points for as long as
          possible. You have 2 types of obstacles in your way: enemies and the
          time limit. Enemies can simply be avoided, while you have to extend
          the time limit yourself by collecting green clocks. Note: currently
          only keyboard controls are supported.
        </p>
        <Button className="btn btn-secondary">Enable Fullscreen</Button>
        <p>
          Assets retrieved from{" "}
          <a href="https://opengameart.org/">Open Game Art</a>
        </p>
      </div>
    ) : (
      <div>
        <p>
          Your browser does not support this game. This could be because you are
          on a mobile device. If you are on a desktop, please enlarge the width
          of your browser window.
        </p>
      </div>
    );
    return (
      <div>
        <Metadata
          title={"Zen van Riel - Home Page"}
          description={
            "This site serves as a small portfolio to post about some of my work."
          }
        />
        <DefaultNavbar />
        <h1>Browser Game</h1>
        {mainGameWindow}
        <canvas
          ref={ref => (this.gameCanvas = ref)}
          id="game-canvas"
          data-processing-sources="bluehat/bluehat.pde"
          width="1280"
          height="720"
        />
      </div>
    );
  }
}
