import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppleStyleDockNav } from "./components/dock-nav";
import { LetterBorderBeam } from "./components/letter-border-beam";
import { CoverPortraitGlow } from "./components/cover-portrait-glow";
import { MemoryChaptersPixels } from "./components/memory-chapters-pixels";
import "../styles.css";
import "./index.css";
import "../app.js";

const coverPortraitRoot = document.getElementById("cover-portrait-root");
if (coverPortraitRoot) {
  ReactDOM.createRoot(coverPortraitRoot).render(
    <React.StrictMode>
      <CoverPortraitGlow />
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const dockNavRoot = document.getElementById("dock-nav-root");
if (dockNavRoot) {
  ReactDOM.createRoot(dockNavRoot).render(
    <React.StrictMode>
      <AppleStyleDockNav />
    </React.StrictMode>
  );
}

const letterBeamRoot = document.getElementById("letter-border-beam-root");
if (letterBeamRoot) {
  ReactDOM.createRoot(letterBeamRoot).render(
    <React.StrictMode>
      <LetterBorderBeam />
    </React.StrictMode>
  );
}

const memoryChaptersRoot = document.getElementById("memory-chapters-root");
if (memoryChaptersRoot) {
  ReactDOM.createRoot(memoryChaptersRoot).render(
    <React.StrictMode>
      <MemoryChaptersPixels />
    </React.StrictMode>
  );
}


