import React from "react";
import { RouteManager } from "./routes/RouteManager";
import { ThemeProvider } from "./common/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <RouteManager />
    </ThemeProvider>
  );
}

export default App;
