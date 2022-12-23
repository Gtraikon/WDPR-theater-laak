import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import ReserverenPage from './Pages/ReserverenPage';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>  
          <Routes>
            <Route exact path="/" element={<HomePage />} ></Route>
            <Route exact path="/reserveren" element={<ReserverenPage />} ></Route>
          </Routes>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;

