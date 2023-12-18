
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  function handleClick(){
    if(theme === 'light')
    {
      setMode("Enable dark mode");
      setTheme("dark");
      showAlert("Dark Mode Enabled","success");
    }
    else{
      setMode("Enable light mode");
      setTheme("light");
      showAlert("Dark Mode Enabled","success");
    }
  }

  function colorHandler(e){
    if(theme !== 'dark')
    {
      
      const color=e.target.style.backgroundColor;
      setTheme(color);
    }
  }

  const [mode,setMode] = useState('Enable dark Mode');
  const [theme,setTheme]= useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    
    setTimeout(()=>{
      setAlert(null)
    },2000);
  }

  // const nm= "Hiii";

  return (
    
    <>
      
      
      <Router>
      <Navbar title="TextUtils"  mode={mode} theme={theme}  handleClick={handleClick} colorHandler={colorHandler}/>
      <Alert alert = {alert}/>  
      <div className="">
        <Routes>   
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" theme={theme} onShowAlert={showAlert}/>} />
        </Routes>
      </div>
      </Router>
        

    </>
    
  );
}

export default App;
