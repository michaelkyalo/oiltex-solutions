import React, { useState } from "react";

function CropTracker() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [plantDate, setPlantDate] = useState("");
  const [harvestDate, setHarvestDate] = useState("");

  const calculateAge = (plantDateStr) => {
    const today = new Date();
    const plantDate = new Date(plantDateStr);
    const diffTime = today - plantDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 ? diffDays : 0;
  };

  const handleAddCrop = () => {
    if (!cropName || !plantDate || !harvestDate) return;

    setCrops([
      ...crops,
      {
        id: Date.now(),
        cropName,
        plantDate,
        harvestDate,
        age: calculateAge(plantDate),
      },
    ]);

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
      <button onClick={handleAddCrop} style={{ marginLeft: "10px" }}>
        Add Crop
      </button>

      <ul style={{ marginTop: "20px" }}>
        {crops.map((crop) => (
          <li key={crop.id}>
            <strong>{crop.cropName}</strong> - Planted: {crop.plantDate}, Harvest:{" "}
            {crop.harvestDate}, Age: {crop.age} day{crop.age !== 1 ? "s" : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CropTracker;
