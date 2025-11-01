import { useState } from "react";


function FuelMyFleet() {
  const [fuelType, setFuelType] = useState("");
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");

  const prices = { petrol: 175, diesel: 165 };

  const handleOrder = () => {
    if (!fuelType || liters <= 0) {
      setMessage("Please select fuel type and enter valid litres");
      return;
    }
    const total = liters * prices[fuelType];
    setPrice(total);
    setMessage(`You ordered ${liters} litres of ${fuelType} for KSh ${total}`);
  };

  return (
    <div className="fuel-page">
      <img
       
        alt="Fleet"
        className="fuel-image"
      />
      <h2>Fuel My Fleet 🚚</h2>
      <p>Subscribe for regular fueling for all your company vehicles.</p>
      <p>if you are a uber owner with several cars</p>

      <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
        <option value="">Select Fuel Type</option>
        <option value="petrol">Petrol</option>
        <option value="diesel">Diesel</option>
      </select>

      <input
        type="number"
        placeholder="Enter litres"
        value={liters}
        onChange={(e) => setLiters(e.target.value)}
      />

      <button onClick={handleOrder}>Order Fuel</button>

      {price > 0 && <p>Total Price: KSh {price}</p>}
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default FuelMyFleet;
