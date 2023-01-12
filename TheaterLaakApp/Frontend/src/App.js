import axios from 'axios';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './Components/Navbar';

import HomePage from './Pages/HomePage';

import Footer from './Components/Footer';
import ReserverenPage from './Pages/ZalenPage';
import LoginPage from './Pages/LoginPage';

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
        <Navbar/>  
        <div className='body'>
          <Routes>
            <Route exact path="/" element={<HomePage />} ></Route>
            <Route exact path="/reserveren" element={<ReserverenPage />} ></Route>
            <Route exact path="/inloggen" element={<LoginPage />} ></Route>
          </Routes>
          </div>
          <Footer/>
    </BrowserRouter>
  );
}

export default App;

