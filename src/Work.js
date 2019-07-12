import React from 'react';
import WorkItem from './WorkItem';
import { work } from './workData';

function Work() {
  return (
    <div className="work" id="work">
      <div className="page-width">
        { work.map(function(workItem, i) {
          var isEven = (i + 1) % 2 === 0
          return <WorkItem data={ workItem } reversed={ isEven } key={ i } />;
        }) }
      </div>
    </div>
  );
}

export default Work;