import { BrowserRouter as Router, route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import ReserverenPage from './Pages/ZalenPage';

import ContactPage from './Pages/ContactPage';
import ZaalPage from './Pages/ZaalReserveren';

function Zaal({ match }){
  return <h1>{match.params.zaalId}</h1>;
}
function App() {
  return (
    <BrowserRouter>
        <Navbar/>  
        <div className='body'>
          <Routes>
            <Route exact path="/" element={<HomePage />} ></Route>
            <Route exact path="/zalen" element={<ReserverenPage />} ></Route>
            <Route exact path="/contact" element={<ContactPage />} ></Route>
            <Route exact path="/zaal" element={<ZaalPage />}></Route>
          </Routes>
          </div>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;

