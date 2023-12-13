import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Anasayfa from './Components/pages/Home';
import Giriş from './Components/pages/SignUp';
import Gündem from './Components/pages/Gündem';
import SonDakika from './Components/pages/Son-Dakika';
import Kayıt from './Components/pages/SignUp2';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Anasayfa />} />
          <Route path='/Giriş' element={<Giriş />} />
          <Route path='/Gündem' element={<Gündem />} />
          <Route path='/Son-Dakika' element={<SonDakika />} />
          <Route path='/Sign-up2' element={<Kayıt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
