import React from 'react';
import './App.css';
import Header from "./containers/Header";
import About from "./containers/About";
import SeparatorButton from "./components/SeparatorButton";
import Projects from "./containers/Projects";


const windowOuterWidth = window.outerWidth;
let userType = "pc";
console.log(windowOuterWidth)

if (windowOuterWidth > 1440) {
    userType = "pc";
} else if (windowOuterWidth < 1440) {
    userType = "tablet";
} else if (windowOuterWidth <= 740) {
    userType = "mobile";
}

console.log(userType)


function App() {
  return (
    <div className="root">
        <div>
            <div className="Page-container">
                <Header/>
                <Projects userType={userType}/>
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
