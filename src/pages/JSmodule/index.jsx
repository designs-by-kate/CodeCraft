import React from 'react';
import Description from '../../components/Description'
import CodeSection from '../../components/CodeSection';
import CheatSheets from '../../components/CheatSheets';
import Tutorial from '../../components/Tutorial';
import '../stylesheet.css'

const JavaScript = () => {
  return (
    <div className="container-module">
      <div className="row">
        <div className="col description-section">
          <Description searchTerm={"javascript"} />
        </div>
      </div >
      <div className="row">
        <div className="col codesnippet-section">
          <CodeSection />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md tutorial-section">
              <Tutorial />
            </div>
            <div className="col-md cheatsheet-section">
              <CheatSheets />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaScript