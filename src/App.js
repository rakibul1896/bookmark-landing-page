import React from "react";
import DownloadExtension from "./components/downloadExtensions/DownloadExtension";
import Features from "./components/features/Features";
import Header from "./components/header/Header";
import Questions from "./questions/Questions";
import './sass/custom.scss';


function App() {
  return (
    <div className="overflow-hidden select-text">
      <Header />
      <Features/>
      <DownloadExtension/>
      <Questions/>
    </div>
  );
}

export default App;
