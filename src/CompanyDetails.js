import React from 'react'

export default function CompanyDetails(){
    const containerStyle = {
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        maxWidth: "800px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Arial', sans-serif",
        color: "#2c3e50",
        textAlign: "center",
      };
    
      const headingStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
      };
    
      const paragraphStyle = {
        lineHeight: "1.6",
        fontSize: "16px",
        marginBottom: "15px",
      };
    
      const infoSection = {
        marginTop: "20px",
        textAlign: "left",
      };
    
      const infoItem = {
        marginBottom: "8px",
      };
    
      return (
        <>
          <div style={containerStyle}>
            <h2 style={headingStyle}>About Our Company</h2>
            <p style={paragraphStyle}>
              Welcome to <strong>Innovative Solutions Inc.</strong>, your trusted
              partner in delivering cutting-edge technology solutions. We specialize
              in web development, software engineering, and AI-driven applications
              tailored to your needs.
            </p>
            <p style={paragraphStyle}>
              At Innovative Solutions, our mission is to empower businesses by
              providing innovative and scalable solutions that drive growth and
              success.
            </p>
    
            <div style={infoSection}>
              <h3>Company Information</h3>
              <p style={infoItem}>
                <strong>Founded:</strong> 2010
              </p>
              <p style={infoItem}>
                <strong>Headquarters:</strong> Pune, Maharashtra, India
              </p>
              <p style={infoItem}>
                <strong>Specialization:</strong> Web Development, AI, and Software
                Engineering
              </p>
              <p style={infoItem}>
                <strong>Contact:</strong> info@innovativesolutions.com
              </p>
            </div>
          </div>
        </>
      );
}