// /src/App.js

import React from "react";
import { CountProvider } from "../context/CountContext"; // Import the provider
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
    <CountProvider>
      {" "}
      {/* Wrap everything in the provider */}
      <Navbar />
      <Card />
    </CountProvider>
  );
}

export default App;
