import React, { useEffect, useState } from "react";

function Market() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    // Example: replace with API call
    setPrices([
      { item: "Maize", price: 120 },
      { item: "Tomatoes", price: 200 },
      { item: "Eggs", price: 15 },
    ]);
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2>Market Prices</h2>
      <ul>
        {prices.map((p, idx) => (
          <li key={idx}>{p.item}: KES {p.price}/unit</li>
        ))}
      </ul>
    </div>
  );
}

export default Market;
