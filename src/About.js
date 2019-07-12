import React from 'react';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div className="about section-padding" id="about">
      <div className="page-width">
        <Fade effect="fadeUp">
          <div className="about__content">
            <h2>About</h2>
            <p className="large">We are a creative and development team with a focus on custom Shopify development. Our goal is to design, build, and optimize a digital storefront that you love. We are happy to help with custom theme design, custom theme development, app integration, and ongoing support.</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default About;
