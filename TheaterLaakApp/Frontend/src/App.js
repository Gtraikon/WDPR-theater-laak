import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>  
          <Routes>
            <Route exact path="/" element={<HomePage />} ></Route>
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;
