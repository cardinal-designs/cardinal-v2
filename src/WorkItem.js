import React from 'react';
import Fade from 'react-reveal/Fade';

function WorkItem({ data, reversed }) {
  return (
    <Fade effect="fadeUp">
      <div className={ `work__item section-padding ${reversed ? 'reversed' : ''}` }>
        <div className="work__item-image">
          { data.image }
        </div>
        <div className="work__item-text">
          <div className="work__item-blob">
            { data.blob }
          </div>
          <p className="mono" style={{ color: data.color }}>{ data.detail }</p>
          <h2>{ data.title }</h2>
          <div className="divider"></div>
          <p>{ data.description }</p>
          <p className="work__item-link"><a href={ data.url } target="_blank" rel="noopener noreferrer">view site</a></p>
        </div>
      </div>
    </Fade>
  );
}

export default WorkItem;