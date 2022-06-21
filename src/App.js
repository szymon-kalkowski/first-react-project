import './App.css';
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import React from "react"

function App() {
  const [lightMode, setLightMode] = React.useState(true)
  function toggleLightMode() {
    setLightMode(prev => !prev)
  }

  return (
    <div className="App">
      <div>
            <Navbar lightMode={lightMode} toggleLightMode={toggleLightMode}/>
            <MainContent lightMode={lightMode}/>
        </div>
    </div>
  );
}

export default App;
