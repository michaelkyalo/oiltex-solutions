import React, { useState } from "react";

function WorkerManager() {
  const [workers, setWorkers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const addWorker = () => {
    if (!name || !role) return;
    setWorkers([...workers, { name, role }]);
    setName("");
    setRole("");
  };

  const removeWorker = (index) => {
    const updated = workers.filter((_, i) => i !== index);
    setWorkers(updated);
  };

  return (
    <div>
      <h2>Worker Manager</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Worker Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          placeholder="Worker Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addWorker}>Add Worker</button>
      </div>

      {workers.length === 0 ? (
        <p>No workers added yet.</p>
      ) : (
        <ul>
          {workers.map((worker, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{worker.name}</strong> - {worker.role}{" "}
              <button onClick={() => removeWorker(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WorkerManager;
