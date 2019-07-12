import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Fade from 'react-reveal/Fade';
import logo from './images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="header">
      <div className="page-width">
        <div className="header__logo">
          <Fade effect="fade" delay={300}>
            <img src={ logo } alt="logo" />
          </Fade>
        </div>
        <Fade effect="fadeDown" delay={400}>
          <div className="header__nav">
            <ul>
              <li style={{ transitionDelay: '100ms' }}>
                <AnchorLink href="#about"><p className="mono mono--small">about</p></AnchorLink>
              </li>
              <li style={{ transitionDelay: '200ms' }}>
                <AnchorLink href="#work"><p className="mono mono--small">work</p></AnchorLink>
              </li> 
              <li style={{ transitionDelay: '300ms' }}>
                <AnchorLink href="#contact"><p className="mono mono--small">contact</p></AnchorLink>
              </li>
            </ul>
            <a href="mailto:michael@cardinaldesigns.co"><FontAwesomeIcon icon={ faEnvelope } /></a>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Header;