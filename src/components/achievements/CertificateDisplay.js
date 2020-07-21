import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const CertificateDisplay = (props) => {
  const { image_path } = props.certs;
  return (
    <Fade left>
      <div>
        <div className="col l6 m6 s12 cert-img">
          <img
            className="materialboxed responsive-img z-depth-4"
            src={image_path}
          />
        </div>
      </div>
    </Fade>
  );
};

CertificateDisplay.propTypes = {
  certs: PropTypes.object.isRequired
};

export default CertificateDisplay;
