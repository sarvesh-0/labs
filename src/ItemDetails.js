import React from 'react'
export default function Display(props){
    const { itemCode, itemName, price, servicecom } = props.item;

    const tableStyle = {
      width: "80%",
      margin: "20px auto",
      borderCollapse: "collapse",
      fontFamily: "'Arial', sans-serif",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
  
    const thStyle = {
      backgroundColor: "#2c3e50",
      color: "white",
      padding: "10px",
      textAlign: "left",
      fontWeight: "bold",
    };
  
    const tdStyle = {
      border: "1px solid #ddd",
      padding: "10px",
      textAlign: "left",
    };
  
    const captionStyle = {
      fontSize: "20px",
      fontWeight: "bold",
      margin: "10px 0",
      color: "#34495e",
    };
  
    return (
      <table style={tableStyle}>
        <caption style={captionStyle}>Item Details</caption>
        <thead>
          <tr>
            <th style={thStyle}>Attribute</th>
            <th style={thStyle}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tdStyle}>Item Code</td>
            <td style={tdStyle}>{itemCode}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Item Name</td>
            <td style={tdStyle}>{itemName}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Price</td>
            <td style={tdStyle}>₹{price}</td>
          </tr>
          <tr>
            <td style={tdStyle}>Service Company</td>
            <td style={tdStyle}>{servicecom}</td>
          </tr>
        </tbody>
      </table>
    );
}