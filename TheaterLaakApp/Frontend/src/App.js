import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';
import TicketPage from './Pages/TicketPage';

import Footer from './Components/Footer';
import ReserverenPage from './Pages/ReserverenPage';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route exact path="/" element={<HomePage />} ></Route>
          <Route exact path="/reserveren" element={<ReserverenPage />} ></Route>
          <Route exact path="/inloggen" element={<LoginPage />} ></Route>
          <Route exact path="/kopen" element={<TicketPage />} ></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;