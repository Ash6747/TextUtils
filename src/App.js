import './App.css';
import { useRef, useState } from "react";
import Navabar from "./components/Navabar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import {
  Route,
  Routes
} from "react-router-dom";
import About from './components/About';

function App() {

  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);
  const timeoutRef = useRef(null); // To keep track of the timeout

  const showAlert = (message, type)=>{
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set the new alert
    setAlert({
      msg: message,
      type: type,
    });

    // Start a new timeout
    timeoutRef.current = setTimeout(() => {
      setAlert(null);
      timeoutRef.current = null; // Cleanup the ref after the timeout
    }, 2000);
  }
  const handleMode = (theme)=>{
    // console.log(mode);
    // if(theme !== null){
    //   setMode(theme);
    // }else{

      if(theme === 'dark'){
        setMode('dark') 
        document.body.style.backgroundColor = "grey"
        showAlert("Dark mode is enabled", "success");
      }else if(theme === 'light'){
        setMode('light') 
        document.body.style.backgroundColor = "white";
        showAlert("Light mode is enabled", "success");
      }else{
        setMode(theme)
      }
    // }
  }
  return (
    <>
      <Navabar mode = {mode} changeMode = {handleMode}/>
      <Alert alert={alert}/>
      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Routes>
        <Route path="/about" element={ <About />}/>
    
        <Route path="/" 
        element={
          <div className={`container ${mode}`} >
            <Textarea mode={mode} showAlert={showAlert}/>
          </div>
          } />
          
      </Routes>
    </>
  );
}

export default App;
