import React from "react";
import "./App.css";
import HeaderComponent from "./components/headerComponent";
import MainContentComponent from "./components/mainContentComponent";
import FooterComponent from "./components/footerComponent";

function App() {
  return (
    <div className="container">
      <HeaderComponent />
      <MainContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
