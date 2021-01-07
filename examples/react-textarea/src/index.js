import React from "react";
import ReactDOM from "react-dom";

import { Editor } from "./Editor";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Editor />
  </React.StrictMode>,
  rootElement
);
