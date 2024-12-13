// CompanyDetails.js
import React from 'react';
import './CompanyDetails.css';

export default function CompanyDetails() {
  return (
    <div className="container">
      <h2 className="heading">About Our Company</h2>
      <p className="paragraph">
        Welcome to <strong>Innovative Solutions Inc.</strong>, your trusted
        partner in delivering cutting-edge technology solutions. We specialize
        in web development, software engineering, and AI-driven applications
        tailored to your needs.
      </p>
      <p className="paragraph">
        At Innovative Solutions, our mission is to empower businesses by
        providing innovative and scalable solutions that drive growth and
        success.
      </p>

      <div className="info-section">
        <h3>Company Information</h3>
        <p className="info-item">
          <strong>Founded:</strong> 2010
        </p>
        <p className="info-item">
          <strong>Headquarters:</strong> Pune, Maharashtra, India
        </p>
        <p className="info-item">
          <strong>Specialization:</strong> Web Development, AI, and Software
          Engineering
        </p>
        <p className="info-item">
          <strong>Contact:</strong> info@innovativesolutions.com
        </p>
      </div>
    </div>
  );
}
