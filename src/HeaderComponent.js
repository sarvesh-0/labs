import React from 'react'
import CompanyDetails from './CompanyDetails';

export default function Header(props){
    const headerStyle = {
        backgroundColor: "#34495e",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      };
    
      const navStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginTop: "10px",
      };
    
      const linkStyle = {
        color: "#ecf0f1",
        textDecoration: "none",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "color 0.3s ease",
      };
    
      const hoverEffect = {
        color: "#1abc9c",
      };
    
      return (
        <>
          <header style={headerStyle}>
            <h1>🚀 Welcome to Innovative Solutions Inc!</h1>
            <nav style={navStyle}>
              <a
                href="#home"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Home
              </a>
              <a
                href="#about"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                About
              </a>
              <a
                href="#services"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Services
              </a>
              <a
                href="#contact"
                style={linkStyle}
                onMouseOver={(e) => (e.target.style.color = hoverEffect.color)}
                onMouseOut={(e) => (e.target.style.color = linkStyle.color)}
              >
                Contact
              </a>
            </nav>
          </header>
          <CompanyDetails></CompanyDetails>
        </>
      );
}