import React, { useState, useEffect } from "react";

function Inventory() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (!itemName || !quantity) return;
    setItems([...items, { name: itemName, qty: quantity }]);
    setItemName("");
    setQuantity("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Inventory</h2>
      <input
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        type="number"
      />
      <button onClick={handleAdd}>Add Item</button>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>{item.name}: {item.qty}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
