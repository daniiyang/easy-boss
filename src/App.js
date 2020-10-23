import React from 'react';
import './App.css';
import Header from "./components/Header";
import About from "./components/About";
import SeparatorButton from "./components/SeparatorButton";
import Projects from "./components/Projects";


const windowOuterWidth = window.outerWidth;
export let userType = "pc";
console.log(windowOuterWidth)

if (windowOuterWidth > 1440) {
    userType = "pc";
} else if (windowOuterWidth < 1440) {
    userType = "tablet";
} else if (windowOuterWidth <= 740) {
    userType = "mobile";
}

console.log(JSON.stringify(userType))


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
