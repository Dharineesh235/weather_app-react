import "./App.css";
import React, { useContext } from "react";
import Modal from "./Modal/Modal";
import { MainComponent } from "./MainComponent/MainComponent";
import { WeatherContext } from "./WeatherContextProvider/WeatherContextProvider";

function App() {
  const { modalContent } = useContext(WeatherContext);

  return (
    <div className="App">
      <MainComponent />
      <Modal modalContent={modalContent} />
    </div>
  );
}

export default App;
