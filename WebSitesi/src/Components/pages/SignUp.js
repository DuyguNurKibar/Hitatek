import React, { useState } from 'react';
import '../../App.css'; 
import '../HeroSection.css';
import Footer from '../Footer.js';
import { Button } from '../Button.js';

function Giriş() {
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
      <div className='giris-sayfasi-container'>
        <div className='giris-form'>
          <h1>Hoşgeldiniz</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='kullaniciAdi'>Kullanıcı Adı:</label>
              <input
                type='text'
                id='kullaniciAdi'
                value={kullaniciAdi}
                onChange={handleKullaniciAdiChange}
              />
            </div>
            <div>
              <label htmlFor='sifre'>Şifre:</label>
              <input
                type='password'
                id='sifre'
                value={sifre}
                onChange={handleSifreChange}
              />
            </div>
            <Button to='/' buttonStyle='btn--giris-buton1' buttonSize = 'btn--giris-buton1' >
             Giriş
            </Button>
            <Button to='/Sign-up2' buttonStyle='btn--giris-buton1'buttonSize = 'btn--giris-buton1' >
            Kayıt Ol
            </Button>

          
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Giriş;
