import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const video = () => (
  <div style={styles}>
    <Hello name="Video React" />
    <h2>
     This is Tutorial Of RPS Game {"\u2728"}
    </h2>
    <Player playsInline poster="https://video-react.js.org/assets/poster.png">
      <source
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        type="video/mp4"
      />
    </Player>
  </div>
);

export default video;