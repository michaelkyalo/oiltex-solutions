import React, { useState } from "react";

function SoilPhAdvisor() {
  const [ph, setPh] = useState("");
  const [advice, setAdvice] = useState("");
  const [adviceColor, setAdviceColor] = useState("black");

  const handleCheckPh = () => {
    const value = parseFloat(ph);
    if (isNaN(value)) {
      setAdvice("Please enter a valid number for pH.");
      setAdviceColor("orange");
      return;
    }

    let msg = "";
    if (value < 5.5) {
      msg = `⚠️ Your soil is acidic (pH ${value}).
Recommended crops: Beans, Maize, Cabbage.
How to improve: Add lime (agricultural lime) to reduce acidity.`;
      setAdviceColor("red");
    } else if (value > 7.5) {
      msg = `⚠️ Your soil is alkaline (pH ${value}).
Recommended crops: Barley, Beetroot, Spinach.
How to improve: Add sulfur or organic matter to lower alkalinity.`;
      setAdviceColor("red");
    } else {
      msg = `✅ Your soil pH (${value}) is optimal for most crops.
You can grow: Maize, Beans, Tomatoes, Cabbage, Carrots, and more.`;
      setAdviceColor("green");
    }

    setAdvice(msg);
  };

  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        padding: "25px",
        borderRadius: "10px",
        color: "black",
        fontFamily: "Arial, sans-serif",
        maxWidth: "100%",
      }}
    >
      <h2 style={{ marginBottom: "15px" }}>Soil pH Advisor</h2>

      <input
        type="number"
        step="0.1"
        placeholder="Enter soil pH (e.g., 6.5)"
        value={ph}
        onChange={(e) => setPh(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "200px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleCheckPh}
        style={{
          padding: "10px 20px",
          backgroundColor: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Check Soil pH
      </button>

      {advice && (
        <div
          style={{
            whiteSpace: "pre-line",
            backgroundColor: "rgba(240, 240, 240, 0.9)",
            padding: "15px",
            borderRadius: "8px",
            color: adviceColor,
            fontWeight: "bold",
          }}
        >
          {advice}
        </div>
      )}
    </div>
  );
}

export default SoilPhAdvisor;
