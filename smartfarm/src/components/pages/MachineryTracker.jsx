import React, { useState } from "react";

function MachineryTracker() {
  const [machines, setMachines] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Available");

  const addMachine = () => {
    if (!name) return;
    setMachines([...machines, { name, status }]);
    setName("");
    setStatus("Available");
  };

  const updateStatus = (index, newStatus) => {
    const updated = machines.map((machine, i) =>
      i === index ? { ...machine, status: newStatus } : machine
    );
    setMachines(updated);
  };

  const removeMachine = (index) => {
    const updated = machines.filter((_, i) => i !== index);
    setMachines(updated);
  };

  return (
    <div>
      <h2>Machinery Tracker</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Machine Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option>Available</option>
          <option>In Use</option>
          <option>Under Maintenance</option>
        </select>
        <button onClick={addMachine}>Add Machine</button>
      </div>

      {machines.length === 0 ? (
        <p>No machines added yet.</p>
      ) : (
        <ul>
          {machines.map((machine, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{machine.name}</strong> - {machine.status}{" "}
              <select
                value={machine.status}
                onChange={(e) => updateStatus(index, e.target.value)}
                style={{ marginLeft: "10px" }}
              >
                <option>Available</option>
                <option>In Use</option>
                <option>Under Maintenance</option>
              </select>
              <button
                onClick={() => removeMachine(index)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MachineryTracker;
