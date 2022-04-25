import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { GlobalStyle } from "./GlobalStyle"
import { Signin } from "./components/SignIn/Signin";
import { Signup } from "./components/SignUp/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateClub from "./components/CreateClub/CreateClub";


function App() {

  const [signed, setSigned] = useState(false)
  return (
    <BrowserRouter>
      <Navbar signed ={signed}/>
      <Routes>
          < Route path="/signin" element={<Signin setSigned = {setSigned}/>}/>
          < Route path="/signup" element={<Signup  setSigned = {setSigned}/>}/>
      </Routes>
      <Dashboard signed = {signed}/>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
