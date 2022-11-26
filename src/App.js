
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>
   <Navbar></Navbar>
   <TextForm heading='Enter the text to analyze'></TextForm>
    </>
  );
}

export default App;
