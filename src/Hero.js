import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from './Header';

function Hero() {
  return (
    <div className="hero">
      <Header />
      <div className="page-width">
        <div className="hero__content">  
          <Fade effect="fadeUp" delay={600}>
            <h1>Cardinal Designs</h1>
          </Fade>
          <Fade effect="fadeUp" delay={700}>
            <div className="divider divider--large-margin"></div>
          </Fade>
          <Fade effect="fadeUp" delay={800}>
            <div>
              <p className="large">We like Shopify.</p>
              <p className="large">Like, a lot.</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Hero;
