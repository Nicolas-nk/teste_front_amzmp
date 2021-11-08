import React from 'react';
import './HeroSection.css';
import { Button } from '../Button/Button.js';
import { Link } from 'react-router-dom';

function HeroSection({
  imgBg,
  topLine,
  topImg,
  topAlt,
  topTxt,
  lightText,
  lightTextDesc,
  headline,
  description,
  paragraphTitle,
  paragraph,
  paragraphTitle2,
  paragraph2,
  buttonLabel,
  listOn,
  listItem1,
  listItem2,
  listItem3,
  listItem4,
  listItem5,
  buttonPosition,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div
        className={imgBg === '1' ? 'home__hero-section imgBg1' : 'home__hero-section imgBg2'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>
                    {topLine ?  <h1>{topTxt}</h1> : <img src={topImg} alt={topAlt} className='home__hero-topimg' />}
                </div>
                <h2 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h2>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                  {description}
                </p>
                <h3 className={lightText ? 'paragraph-title' : 'paragraph-title colorful'}>
                  {paragraphTitle}
                </h3>
                <p className={lightTextDesc ? 'paragraph1' : 'paragraph1 dark'}>{paragraph}</p>
                <Link to='/'>
                  <Button buttonSize='btn--wide' buttonColor='primary' buttonPosition={buttonPosition}>
                    {buttonLabel}
                  </Button>
                </Link>
                <h3 className={lightText ? 'paragraph-title' : 'paragraph-title colorful'}>
                  {paragraphTitle2}
                </h3>
                <p className={lightTextDesc ? 'paragraph2' : 'paragraph2 dark'}>{paragraph2}</p>

                {listOn 
                ? <ul className={lightTextDesc ? 'list' : 'list dark'}>
                  <li>{listItem1}</li>
                  <li>{listItem2}</li>
                  <li>{listItem3}</li>
                  <li>{listItem4}</li>
                  <li>{listItem5}</li>
                </ul> : <></>}
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;


