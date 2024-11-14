import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Acordeon from "./acordeon";
import "./App.css";

function App() {
  return (
    <>
      <section className="container-sm">
        <h1 className="display-4 ">App de Tahiel</h1>
       <Acordeon />
      </section>
    </>
  );
}

export default App;
