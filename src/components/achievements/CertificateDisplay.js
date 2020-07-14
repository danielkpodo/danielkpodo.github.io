import React from "react";
import PropTypes from "prop-types";

const CertificateDisplay = (props) => {
  const { image_path } = props.certs;
  return (
    <div>
      <div className="col l6 m6 s12 cert-img">
        <img
          className="materialboxed responsive-img z-depth-4"
          src={image_path}
        />
      </div>
    </div>
  );
};

CertificateDisplay.propTypes = {
  certs: PropTypes.object.isRequired
};

export default CertificateDisplay;
