
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
   <Navbar></Navbar>
   <TextForm heading='Enter the text to analyze'></TextForm>
   <About></About>
    </>
  );
}

export default App;
