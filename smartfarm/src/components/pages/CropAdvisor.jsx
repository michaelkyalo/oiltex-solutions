import React, { useState } from "react";

function CropAdvisor() {
  const [season, setSeason] = useState("");
  const [soilType, setSoilType] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const handleSuggest = () => {
    // Placeholder logic for suggestions
    if (season && soilType) {
      setSuggestion(
        `Based on ${season} season and ${soilType} soil, recommended crops: Maize, Beans, Tomatoes.`
      );
    } else {
      setSuggestion("Please select season and soil type.");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Crop Advisor</h2>

      <select value={season} onChange={(e) => setSeason(e.target.value)}>
        <option value="">Select Season</option>
        <option value="long-rains">Long Rains</option>
        <option value="short-rains">Short Rains</option>
        <option value="dry">Dry Season</option>
      </select>

      <select value={soilType} onChange={(e) => setSoilType(e.target.value)}>
        <option value="">Select Soil Type</option>
        <option value="loamy">Loamy</option>
        <option value="sandy">Sandy</option>
        <option value="clay">Clay</option>
      </select>

      <button onClick={handleSuggest}>Get Suggestion</button>

      {suggestion && (
        <div style={{ marginTop: "20px" }}>
          <p>{suggestion}</p>
        </div>
      )}
    </div>
  );
}

export default CropAdvisor;
