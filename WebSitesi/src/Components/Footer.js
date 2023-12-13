import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Haber Bültenim'e abone olun, gündemden geri kalmayın!
        </p>
        <p className='footer-subscription-text'>
        Aboneliğinizi istediğiniz zaman iptal edebilirsiniz.
        </p>        
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Mail adresiniz'
            />
            <Button buttonStyle='btn--outline'>Abone Ol</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>

            <h2>Kurumsal</h2>
            <Link to='/'>Kullanım Koşulları</Link>
            <Link to='/'>Yayın İlkeleri</Link>
            <Link to='/'>Künye</Link>
            <Link to='/'>Reklam</Link>
            <Link to='/'>Cookie Politikası</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Dijital</h2>
            <Link to='/'>HaberBültenimVideo.com.tr</Link>
            <Link to='/'>HaberBültenim.com.tr</Link>
            <Link to='/'>HaberBültenimRadyo.com.tr</Link>
          </div>    
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
          <Link to='/' className='company-logo'>
              Haber Bültenim
              <i class='fas fa-globe' />
            </Link>
          </div>
          <small class='website-rights'><i class="fas fa-copyright"></i> Haber Bültenim  2023 | Tüm Hakları Saklıdır.</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='https://www.youtube.com'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://twitter.com'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='https://linkedin.com'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
