import React from "react";
import DownloadExtension from "./components/downloadExtensions/DownloadExtension";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import './sass/custom.scss';


function App() {
  return (
    <div className="overflow-hidden select-text">
      <Header />
      <Features/>
      <DownloadExtension/>
    </div>
  );
}

export default App;
