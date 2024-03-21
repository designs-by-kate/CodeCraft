import React from 'react';
import Description from '../../components/Description';
import CodeSection from '../../components/CodeSection';
import Tutorial from '../../components/Tutorial';
import CheatSheets from '../../components/CheatSheets';
import '../stylesheet.css'

const HTML = () => {
  const embedId = "YOUR_EMBED_ID_HERE";

  return (
    <div className="container-module">
      <div className="row">
        <div className="col description-section">
          <Description searchTerm={"html"} />
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
              <Tutorial embedId={embedId}/>
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

export default HTML