import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import FoundRevisions from "./views/FoundRevisions";
import Explanation from "./views/Explanation";

import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">QualityInsight</div>
        <div className="subtitle">
          ORES Article Quality Visualization Tool for the English Wikipedia
        </div>
      </header>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/found-revisions" component={FoundRevisions} exact />
        <Route path="/explanation" component={Explanation} exact />
      </Switch>
    </div>
  );
}

export default App;
