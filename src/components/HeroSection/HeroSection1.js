import React from 'react';

function HeroSection({
  imgBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  img1,
  title1,
  paragraph1,
  img2,
  title2,
  paragraph2,
  img3,
  title3,
  paragraph3,
  img4,
  title4,
  paragraph4,
  img5,
  title5,
  paragraph5,
  img6,
  title6,
  paragraph6,
  txtStart,
  imageContend,
}) {
  return (
    <>
      <div
        className={imgBg === '3' ? 'home__hero-section imgBg3' : 'home__hero-section imgBg4'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: txtStart === 'start' ? 'row' : 'column'
            }}
          >
            <div className={txtStart === 'start' ? 'col' : 'col column'}>
              <div className={txtStart === 'start' ? 'home__hero-text-package' : 'home__hero-text-package column'}>
                <div className='top-line'>
                    <h1>{topLine}</h1>
                </div>
                <h2 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h2>
                <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>
                  {description}
                </p>
                <div className='home__hero-contend'>
                    {imageContend
                        ? <img src={img} alt={alt} className='home__hero-img-contend' />
                        : <div className='home__hero-list-contend dark'>
                            <ul className=''>
                                <li style={{
                                  listStyleImage: 'url("'+img1+'")',
                                }}>
                                    <h3>{title1}</h3>
                                    <p>{paragraph1}</p>
                                </li>
                                <li style={{
                                  listStyleImage: 'url("'+img2+'")',
                                }}>
                                    <h3>{title2}</h3>
                                    <p>{paragraph2}</p>
                                </li>
                                <li style={{
                                  listStyleImage: 'url("'+img3+'")',
                                }}>
                                    <h3>{title3}</h3>
                                    <p>{paragraph3}</p>
                                </li>
                            </ul>
                            <ul className=''>
                                <li style={{
                                  listStyleImage: 'url("'+img4+'")',
                                }}>
                                    <h3>{title4}</h3>
                                    <p>{paragraph4}</p>
                                </li>
                                <li style={{
                                  listStyleImage: 'url("'+img5+'")',
                                }}>
                                    <h3>{title5}</h3>
                                    <p>{paragraph5}</p>
                                </li>
                                <li style={{
                                  listStyleImage: 'url("'+img6+'")',
                                }}>
                                    <h3>{title6}</h3>
                                    <p>{paragraph6}</p>
                                </li>
                            </ul>
                        </div>
                    }
                    
                </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </>
  );
}

export default HeroSection;