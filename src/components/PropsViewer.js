import React from 'react';

const PropsViewer = ({match, location}) => {

  return (
    <h1>
      {location.key}
    </h1>
  );
};

export default PropsViewer;