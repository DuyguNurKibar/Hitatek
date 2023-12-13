import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Weather from './pages/Widget';



function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const subMenuRef = useRef(null);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => {
    setClick(false);
    setShowSubMenu(false);
  };

  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      
      <nav className='navbar' >

         <div className='navbar-container'>     
              <Weather />
         </div>

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            HaberBültenim <i className='fas fa-globe'></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-links-mobile'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Anasayfa
              </Link>
            </li>
            
            <li
              className='nav-item'
              onMouseEnter={handleSubMenu}
              onMouseLeave={handleSubMenu}
            >
              <Link to='/Haber-Bültenleri' className='nav-links'>Haber Bültenleri</Link>
              {showSubMenu && (
                <ul className='submenu' ref={subMenuRef}>
                  <li>
                    
                  <Link to='/Ekonomi' className='kategori-link' onClick={closeMobileMenu}>
  Ekonomi
                  </Link>
                  <Link to='/Eğitim' className='kategori-link' onClick={closeMobileMenu}>
                    Eğitim
                  </Link>
                  <Link to='/Global-Gündem' className='kategori-link' onClick={closeMobileMenu}>
                    Global Gündem
                  </Link>
                  <Link to='/Gündem' className='kategori-link' onClick={closeMobileMenu}>
                    Gündem 
                  </Link>
                  <Link to='/Kültür' className='kategori-link' onClick={closeMobileMenu}>
                    Kültür
                  </Link>
                  <Link to='/Siyaset' className='kategori-link' onClick={closeMobileMenu}>
                    Siyaset
                  </Link>
                  <Link to='/Spor' className='kategori-link' onClick={closeMobileMenu}>
                    Spor
                 </Link>
                  <Link to='/Sağlık' className='kategori-link' onClick={closeMobileMenu}>
                    Sağlık 
                  </Link>
                  <Link to='/Son-Dakika' className='kategori-link' onClick={closeMobileMenu}>
                    Son Dakika 
                  </Link>
                  <Link to='/Teknoloji' className='kategori-link' onClick={closeMobileMenu}>
                    Teknoloji
                  </Link>
                  <Link to='/Yerel-Gündem' className='kategori-link' onClick={closeMobileMenu}>
                    Yerel Gündem
                  </Link>

                  </li>                   
                </ul>
              )}
            </li>        
            <li className='nav-item'>
              <Link to='/Son-Dakika' className='nav-links' onClick={closeMobileMenu}>
                Son Dakika
              </Link>
            </li>        
            <li className='nav-links-mobile'>
              <Link to='/Giriş' className='nav-links' onClick={closeMobileMenu}>
                Giriş
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link to='/Ayarlar' className='nav-links' onClick={closeMobileMenu}>
                Ayarlar
              </Link>
            </li>
            
          </ul>
          {button && <Button to='/Giriş' buttonStyle='btn--outline'>GİRİŞ</Button>}
        
          
        </div>
        
      </nav>
    </>
  );
}

export default Navbar;
