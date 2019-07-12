import React from 'react';
import logo from './images/logo-white.png';
import shopify from './images/shopify-experts.png';

function Contact() {
  return (
    <div className="footer">
      <div className="page-width">
        <img src={ logo } className="logo" alt="logo" />
        <p>&copy; Cardinal Designs 2019</p>
        <img src={ shopify } className="shopify" alt="shopify" />
      </div>
    </div>
  );
}

export default Contact;