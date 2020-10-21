import React from 'react';
import './App.css';
import Header from "./containers/Header";
import About from "./containers/About";
import SeparatorButton from "./components/SeparatorButton";
import Projects from "./containers/Projects";

function App() {
  return (
    <div className="root">
        <div>
            <div className="Page-container">
                <Header/>
                <Projects/>
                <SeparatorButton/>
            </div>
        </div>
        <div className="Blue-page">
            <div className="Page-container">
                <About/>
            </div>
        </div>
    </div>
  );
}

export default App;
