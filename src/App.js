
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import PostForm from './components/PostForm';
import TextForm from './components/TextForm';


function App() {
  const  [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020008';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }


  }

  return (

    <>
      <Navbar mode={mode} toggleMode={toggleMode}></Navbar>
      <TextForm heading='Enter the text to analyze' mode={mode}  ></TextForm>
      <About mode={mode}></About>

    </>
  );
}

export default App;
