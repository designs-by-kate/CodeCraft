
import React from "react";
import PropTypes from "prop-types";
import './style.css';

const Tutorial = ({ embedId }) => (
  <div className="video-responsive">
      <h1>Watch Tutorial</h1>
      <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="TutorialVideo"
      />
  </div>
);

Tutorial.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default Tutorial;
