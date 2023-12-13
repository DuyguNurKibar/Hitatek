import React, { Suspense } from 'react';
import LazyLoad from 'react-lazyload';
import CardItem from './CardItem';
import './Card.css';
import AnaResim from './images/resim_ana.jpeg'; 

function Cards() {
  const handleImageLoaded = (event) => {
    event.target.classList.add('loaded'); 
  };

  return (
    <div className='cards'>
      <h1>Son Dakika</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <LazyLoad height={1000} once>
              <Suspense fallback={<div>Loading...</div>}>
                <CardItem
                  img
                  src={AnaResim}
                  className="App-logo"
                  alt="Ana Resim"
                  style={{ width: '90px' }}
                  text='Haber Bültenim Açıklama Alanı'
                  label='Son Dakika'
                  path='/Son-Dakika'
                  onLoad={handleImageLoaded} 
                />
              </Suspense>
            </LazyLoad>
            <LazyLoad height={1000} once>
              <Suspense fallback={<div>Loading...</div>}>
                <CardItem
                  img
                  src={AnaResim}
                  className="App-logo"
                  alt="Ana Resim"
                  style={{ width: '90px' }}
                  text='Haber Bültenim Açıklama Alanı'
                  label='Sağlık'
                  path='/Sağlık'
                  onLoad={handleImageLoaded} 
                />
              </Suspense>
            </LazyLoad>
            <LazyLoad height={1000} once>
              <Suspense fallback={<div>Loading...</div>}>
                <CardItem
                  img
                  src={AnaResim}
                  className="App-logo"
                  alt="Ana Resim"
                  style={{ width: '90px' }}
                  text='Haber Bültenim Açıklama Alanı'
                  label='Ekonomi'
                  path='/Ekonomi'
                  onLoad={handleImageLoaded} 
                />
              </Suspense>
            </LazyLoad>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
