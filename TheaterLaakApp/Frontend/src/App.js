import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';
import TicketPage from './Pages/TicketPage';

import Footer from './Components/Footer';

import LoginPage from './Pages/LoginPage';
import VoorstellingPage from './Pages/VoorstellingPage';
import ZalenPage from './Pages/ZalenPage';
import ContactPage from './Pages/ContactPage';
<<<<<<< HEAD
import ZaalReserverenPage from './Pages/ZaalReserveren';
import DonerenPage from "./Pages/DonerenPage";
import GoedDoelPage from "./Pages/GoedDoelPage";
import GoedDoelDoneerPage from "./Pages/GoedDoelDoneerPage";
import RegistrerenPage from "./Pages/RegistrerenPage";
=======
import ZaalReserveerPage from './Pages/ZaalReserverenPage';
>>>>>>> zalenlijst

function Zaal({ match }){
  return <h1>{match.params.zaalId}</h1>;
}

const setAuthToken = token => {
  if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  else
      delete axios.defaults.headers.common["Authorization"];
}

function App() {
  const token = localStorage.getItem("token");
  if (token) {
      setAuthToken(token);
  }

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
<<<<<<< HEAD
          <Route exact path="/contact" element={<ContactPage />} ></Route>
          <Route exact path="/zaalreserveren" element={<ZaalReserverenPage />} ></Route>
          <Route exact path="/doneren" element={<DonerenPage />} ></Route>
          <Route exact path="/donerengoeddoel" element={<GoedDoelPage />} ></Route>
          <Route exact path="/donerengoeddoel/doneren" element={<GoedDoelDoneerPage />} ></Route>
          <Route exact path="/registreren" element={<RegistrerenPage />} ></Route>
=======
          <Route exact path="/zaalreserveer"element={<ZaalReserveerPage/>}></Route>
          <Route exact path="/contact"element={<ContactPage/>}></Route>
>>>>>>> zalenlijst
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;