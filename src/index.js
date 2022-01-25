import React from "react";
import { hydrate, render } from "react-dom";
import "./styles.css"

const Index = () => {
    return(
        <div>
            <h1 className="text-xl text-green-600">Website under construction :D</h1>
            <p className="text-2xl text-red-600">Stay tuned</p>
        </div>
    )
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Index />, rootElement);
} else {
  render(<Index />, rootElement);
}