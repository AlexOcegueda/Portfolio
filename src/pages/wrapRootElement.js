import React from 'react';
import GlobalStyles from './globalStyles';

const wrapRootElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
};

export default wrapRootElement;
