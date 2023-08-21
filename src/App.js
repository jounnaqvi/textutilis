// import {BrowserRouter as Router,  Link,Routes,Switch, Route} from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import React ,{useState} from 'react';


function App() { 
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showalert = (message,type)=>{
    setalert({
      
      msg: message,
      type: type,
      
      
      
      
      
      
    })
    setTimeout(() => {
      setalert(null);
}, 1500);





}
const togglemode = ()=>{
  if(mode==='light'){
    setmode("dark");
    document.body.style.backgroundcolor='black';
    showalert("dark mode will be enabled","success");
  }else{
    setmode("light");
    document.body.style.backgroundcolor='white';
    showalert("white mode will be enabled","success");
  }
  
  
  
  
}
return (
 <>

<Navbar tittle = "textutilis" mode = {mode} togglemode ={togglemode}/>
<Alert alert = {alert}/>
<div className="container">
     {/* <About/> */}
  




<Textform   showalert= {showalert} heading = "this is the way to analyze everything"/>
</div>



  </>
  );
}

export default App;
