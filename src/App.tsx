import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CustomSlider from "./components/atoms/CustomSlider";
import CompwithProps from "./components/atoms/CompwithProps";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        Hi
        <CompwithProps message="Welcome to Zemoso" />
        <Banner></Banner>
      {/* </header> */}
      <>
        <CustomSlider message="Slider"></CustomSlider>
      </>
    </div>
  );
}

export default App;
