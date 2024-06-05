


import React from 'react';
import "./main.css" ;

const Maincomp = ({pageName , Designer }) => {
  return (
    <main>
      {pageName}
      <br />
      Designed by {Designer}
    </main>
  );
}

export default Maincomp;
