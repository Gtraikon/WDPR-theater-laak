import { BrowserRouter as Router, route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';
import TicketPage from './Pages/TicketPage';

import Footer from './Components/Footer';

import LoginPage from './Pages/LoginPage';
import VoorstellingPage from './Pages/VoorstellingPage';
import ZalenPage from './Pages/ZalenPage';
import ContactPage from './Pages/ContactPage';
import ZaalReserverenPage from './Pages/ZaalReserveren';

function Zaal({ match }){
  return <h1>{match.params.zaalId}</h1>;
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route exact path="/" element={<HomePage />} ></Route>
          <Route exact path="/zalen" element={<ZalenPage />} ></Route>
          <Route exact path="/inloggen" element={<LoginPage />} ></Route>
          <Route exact path="/tickets" element={<TicketPage />} ></Route>
          <Route exact path="/Voorstellingen" element={<VoorstellingPage />} ></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;