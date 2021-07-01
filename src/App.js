import React from "react";
import "./css/App.css";
import Game from "./components/Game/game.js";
import Join from "./components/join.js"
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter basename={window.location.pathname || ''}>
        <Route path="/" exact component={Join} />
        <Route path="/game" component={Game} />
        </BrowserRouter>
    </div>
  );
}

export default App;
