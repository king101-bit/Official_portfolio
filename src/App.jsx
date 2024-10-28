import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Components/Header.jsx";
import Skillset from "./Components/Skillset.jsx";
import Projects from "./Components/Projects.jsx";
import Contact from "./Components/Contact.jsx";

function App() {
  return (
    <>
      <Header />
      <Skillset />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
