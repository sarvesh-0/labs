import React from 'react'
import Display from './ItemDetails'
export default function Items(){
    let item1 = {
        itemCode: 112,
        itemName: 'ECommerce Website',
        price: 15000,
        servicecom: 'Seed Infotech',
      };
    
      return (
        <>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1 style={{ color: "#34495e", fontFamily: "'Arial', sans-serif" }}>
              Welcome to Our Services
            </h1>
          </div>
          <Display item={item1} />
        </>
      );
}