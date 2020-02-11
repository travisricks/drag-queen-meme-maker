import React from "react";
import "../styles/App.scss";
import "../styles/Meme.scss";

// import { generateFakes } from "../utils/faker";

export default function Meme(props) {
  // const fakeData = generateFakes();
  return (
    <div className="meme">
      <img
        src={props.img}
        alt="quote"
        className="imageFlex"
      />
      <blockquote>
        <p>{props.quote}</p>
        <p>said by: {props.name}</p>
      </blockquote>

      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-text="prefill test"
        data-url="http://example.com"
        data-hashtags="DragQueenMemes"
        data-show-count="false"
        target="_blank"
      >
        Share on Twitter
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
    </div>
  );
}
