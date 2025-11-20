import React, { useState } from "react";

function CropTracker() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [plantDate, setPlantDate] = useState("");
  const [harvestDate, setHarvestDate] = useState("");

  const handleAddCrop = () => {
    if (!cropName || !plantDate || !harvestDate) return;

    setCrops([...crops, { cropName, plantDate, harvestDate }]);
    setCropName("");
    setPlantDate("");
    setHarvestDate("");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Crop Tracker</h2>

      <input
        type="text"
        placeholder="Crop Name"
        value={cropName}
        onChange={(e) => setCropName(e.target.value)}
      />
      <input
        type="date"
        placeholder="Planting Date"
        value={plantDate}
        onChange={(e) => setPlantDate(e.target.value)}
      />
      <input
        type="date"
        placeholder="Harvest Date"
        value={harvestDate}
        onChange={(e) => setHarvestDate(e.target.value)}
      />
      <button onClick={handleAddCrop}>Add Crop</button>

      <ul>
        {crops.map((crop, idx) => (
          <li key={idx}>
            {crop.cropName} - Plant: {crop.plantDate}, Harvest: {crop.harvestDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CropTracker;
