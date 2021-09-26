import React from "react";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import './sass/custom.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Features/>
    </div>
  );
}

export default App;
