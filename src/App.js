import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Eng from "./Eng";
import Swe from "./Swe";
import Arabic from "./Arabic";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Eng} />
        <Route path="/swe" component={Swe} />
        <Route path="/ar" component={Arabic} />
      </Router>
    </>
  );
}

export default App;
