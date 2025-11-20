import React, { useState } from "react";

function LivestockTracker() {
  const [livestock, setLivestock] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddAnimal = () => {
    if (!animalType || !quantity) return;

    setLivestock([...livestock, { animalType, quantity }]);
    setAnimalType("");
    setQuantity("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Livestock Tracker</h2>

      <input
        type="text"
        placeholder="Animal Type"
        value={animalType}
        onChange={(e) => setAnimalType(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleAddAnimal}>Add Livestock</button>

      <ul>
        {livestock.map((animal, idx) => (
          <li key={idx}>
            {animal.animalType} - Quantity: {animal.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LivestockTracker;
