import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Button.js';
import Anaavideo from '../Videos/video-2.mp4';
import Footer from '../Footer.js';
import '../../App.css'

function Kayıt() {
  const [kullaniciAdi, setKullaniciAdi] = useState('');
  const [sifre, setSifre] = useState('');

  const handleKullaniciAdiChange = (e) => {
    setKullaniciAdi(e.target.value);
  };

  const handleSifreChange = (e) => {
    setSifre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kullanıcı Adı:', kullaniciAdi);
    console.log('Şifre:', sifre);
  };

  return (
    <>
      <div className='hero-container'>
        <video src={Anaavideo} autoPlay loop muted />
        <h1>Haber Bültenim<i className='fas fa-globe'></i> </h1>
        <Link to='/' className='hero-text-link'>
          <p3>Kaydolup Reklamsız Deneyimle </p3>
        </Link>
        <div className="login-form">
          <h2>Kullanıcı Adı:</h2>
          <input
            type='text'
            value={kullaniciAdi}
            onChange={handleKullaniciAdiChange}
          />
          <h2>Şifre:</h2>
          <input
            type='password'
            value={sifre}
            onChange={handleSifreChange}
          />
            <p>Hesaplarınla Kaydol</p>
          <Button buttonStyle='btn--giris-buton1' buttonSize='btn--giris-buton1'>
          <i className='fab fa-google'/> Google account
          </Button>
          <Button buttonStyle='btn--giris-buton1' buttonSize='btn--giris-buton1'>
          <i class='fab fa-twitter' /> Twitter account
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Kayıt;
