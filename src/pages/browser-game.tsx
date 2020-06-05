import React from "react";
import {RouteComponentProps} from "@reach/router";
import DefaultNavbar from "../components/DefaultNavbar";
import Metadata from "../components/Metadata";
import Button from "@material-ui/core/Button";
import "../css/browser-game.css";

export default class BrowserGame extends React.Component<RouteComponentProps> {
  gameCanvas: HTMLCanvasElement;

  state = {
    showGame: false,
  };

  constructor(props: Readonly<RouteComponentProps<{}>>) {
    super(props);
    this.handleShowGameState = this.handleShowGameState.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const script = document.createElement("script");

    script.src = "../bluehat/processing.reactified.min.js";
    script.async = false;

    document.body.appendChild(script);
    window.addEventListener("resize", this.handleShowGameState);
    this.handleShowGameState();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleShowGameState);
  }

  componentDidUpdate() {
    if (this.state.showGame) {
      let scaler = document.documentElement.clientWidth / 1700;
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
    const mainGameInformation = this.state.showGame ? (
      <div>
        <p>
          This is a small game fully playable in your browser (1-2 players). The
          purpose of the game is to survive and accumulate points for as long as
          possible. You have 2 types of obstacles in your way: enemies and the
          time limit. Enemies can simply be avoided, while you have to extend
          the time limit yourself by collecting green clocks. Note: currently
          only keyboard controls are supported.
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

    const subGameInformation = this.state.showGame ? (
      <div className="right-aligned-content-footer">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.gameCanvas.requestFullscreen()}
        >
          Enable Fullscreen
        </Button>

        <i>
          Assets retrieved from{" "}
          <a href="https://opengameart.org/">Open Game Art</a>
        </i>
      </div>
    ) : (
      <div></div>
    );

    return (
      <div>
        <Metadata
          title={"Zen van Riel - Browser Game"}
          description={"Small browser game playable by 1-2 people."}
        />
        <DefaultNavbar />
        <div className="container">
          <h1>Browser Game</h1>
          {mainGameInformation}
          <canvas
            ref={ref => (this.gameCanvas = ref)}
            data-processing-sources="../bluehat/bluehat.pde"
            width="1280"
            height="720"
          />
          {subGameInformation}
        </div>
      </div>
    );
  }
}
