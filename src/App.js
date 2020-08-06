import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Eng from "./Eng/Eng";
import Swe from "./Swe/Swe";
import Ar from "./Ar/Ar";

import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Route exact path="/" component={Eng} />
        <Route path="/swe" component={Swe} />
        <Route path="/ar" component={Ar} />
      </Router>
    </>
  );
}

export default App;
