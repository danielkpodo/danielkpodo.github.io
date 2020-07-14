import React from "react";
import { certificates } from "./certificates";
import CertificateDisplay from "./CertificateDisplay";

const Achievement = () => {
  return (
    <section className="achievements scrollspy" id="achievements">
      <div className="section-header center-align">
        <h2>My Certifications</h2>
        <hr className="rule" />
        <p>A couple of certifications demonstrating my developer training</p>
      </div>
      <div className="container">
        <div className="row">
          {certificates.map((certificate, index) => (
            <CertificateDisplay key={index} certs={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
