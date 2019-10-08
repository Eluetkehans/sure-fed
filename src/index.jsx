import React from "react";
import { render } from "react-dom";
import Main from "./components/main";

const domTarget = document.getElementById('app')
if (!domTarget) {
  throw new Error("couldn't find element with id root")
}

render( <Main />, domTarget );

export default () => { // for prerender-loader
  render( <Main />, domTarget );
}