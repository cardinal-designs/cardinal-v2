import React from 'react';
import Fade from 'react-reveal/Fade';

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="page-width">
        <Fade effect="fadeUp">
          <p className="large">Let’s chat!</p>
          <div className="contact-form">
            <form action="https://formspree.io/michael@cardinaldesigns.co" method="POST">
              <input type="text" name="name" placeholder="Your name" />
              <input type="email" name="_replyto" placeholder="Your email" />
              <textarea name="message" placeholder="How can we help?" rows="10" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Contact;