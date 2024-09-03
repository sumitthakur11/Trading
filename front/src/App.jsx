import './App.css';
import {  BrowserRouter,Routes,  Route } from 'react-router-dom';
import LoginPage from "./Components/signup/login"
import Dashboard from "./Components/Dashboard/dashboard"
import CustomForm from "./Components/Dashboard/Dashboard1"

import 'bootstrap/dist/css/bootstrap.min.css';
import Fetchtoken from "./Components/zerodha/requestedtoken"

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
      
      
     <Route path="/" element={<LoginPage />}></Route>
     <Route path="/dashboard" element={<Dashboard/>}></Route>
     <Route path="/dashboard1" element={<CustomForm/>}></Route>

     {/* <Route path="/zerodha" element={<Fetchtoken/>}></Route> */}
     </Routes>
     
    </BrowserRouter>
  )
}

export default App;
