import React from 'react'
export default function Footer(){
    const footerStyle = {
        backgroundColor: "#2c3e50",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        bottom: 0,
        width: "100%",
      };
    
      const linksStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "10px",
      };
    
      const linkStyle = {
        color: "#ecf0f1",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "14px",
      };
    
      const socialIcons = {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "15px",
      };
    
      return (
        <>
          <div style={footerStyle}>
            <h3>Connect With Us</h3>
            <div style={linksStyle}>
              <a href="#about" style={linkStyle}>
                About Us
              </a>
              <a href="#services" style={linkStyle}>
                Services
              </a>
              <a href="#contact" style={linkStyle}>
                Contact
              </a>
            </div>
            <div style={socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="Facebook" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/twitter.png" alt="Twitter" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="Instagram" />
              </a>
            </div>
            <p style={{ marginTop: "20px", fontSize: "12px" }}>
              &copy; {new Date().getFullYear()} Your Website. All rights reserved.
            </p>
          </div>
        </>
      );
   }
