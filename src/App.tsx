import React from "react";
import { Router } from "@reach/router";

import { HomePage } from "pages";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <HomePage path="/" />
      </Router>
    </>
  );
};

export default App;
