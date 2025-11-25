import React, { useState } from "react";

function LivestockHealth() {
  const [livestock, setLivestock] = useState([
    { name: "Cow 1", health: "Good" },
    { name: "Goat 1", health: "Good" },
    { name: "Sheep 1", health: "Fair" },
  ]);

  const updateHealth = (index, newHealth) => {
    const updated = [...livestock];
    updated[index].health = newHealth;
    setLivestock(updated);
  };

  return (
    <div>
      <h3>Livestock Health Tracker</h3>
      <table style={{ width: "100%", color: "white" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Health Status</th>
          </tr>
        </thead>
        <tbody>
          {livestock.map((animal, idx) => (
            <tr key={idx}>
              <td>{animal.name}</td>
              <td>
                <select
                  value={animal.health}
                  onChange={(e) => updateHealth(idx, e.target.value)}
                >
                  <option value="Good">Good</option>
                  <option value="Fair">Fair</option>
                  <option value="Poor">Poor</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LivestockHealth;
