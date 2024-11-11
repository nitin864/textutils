import "./App.css";
import React, { useState } from "react"; 
//import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
 

import {
  BrowserRouter as Router,
   
  Route,
   
  Routes,
    
} from "react-router-dom";

import About from "./components/About";

function App(props) {
  
  const [alert, setAlert] = useState(null);

  const showAlert=(message , type)=>{
     setAlert({
      msg: message,
      type :type
     })
     setTimeout(()=>{
      setAlert(null)
     },1500);

     
  }
  return (
    <> 
     <Router>
       
      <Navbar title="TextUtils"  />
      <Alert alert={alert}/>
       
       
      <div className="container my-3">
        
        <div>
          <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text Below To Analyze"/>} />
          <Route exact path="/about" element={<About  showAlert={showAlert}/>} />
           
          </Routes>
           
        </div>
      
         
      </div>
      </Router> 
    </>
  );
}

export default App;
