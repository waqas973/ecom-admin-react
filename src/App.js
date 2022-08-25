import React, { useReducer } from "react";

import {
  LayoutContext,
  LayoutReducer,
  LayoutState,
} from "src/context/LayoutContext";
import Routes from "src/routes";

function App() {
  const [data, dispatch] = useReducer(LayoutReducer, LayoutState);
  return (
    <LayoutContext.Provider value={{ data, dispatch }}>
      <Routes />
    </LayoutContext.Provider>
  );
}

export default App;
