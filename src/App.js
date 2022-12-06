
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import PostForm from './components/PostForm';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {

  const [text, setText] = useState('Enable Mode');

  const handleMode = (getMode) => {
    setMode(getMode)
    document.body.style.backgroundColor = colorDict[getMode];
    console.log(getMode)

  }
  const [mode, setMode] = useState('light');

  const colorDict = {
    'dark': '#000000',
    'light': '#FFFFFF',
    'red': '#FF0000',
    'cyan': '#00FFFF',
    'yellow': '#FFFF00',
    'green': '#008000',
    'blue': '#0000FF',
    'gray': '#808080'
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setText('Disiable Mode');
      document.body.style.backgroundColor = colorDict['dark'];
    }
    else {
      setMode('light');
      setText('Enable Mode');
      document.body.style.backgroundColor = colorDict['light'];
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} handleMode={handleMode} text={text}></Navbar>
        <Routes>

          <Route path="/About.js" element={<About mode={mode}/>}/>          
          <Route path="/" element={<TextForm heading='Enter the text to analyze' mode={mode} />}/>       
          
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
