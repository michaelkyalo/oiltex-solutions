import { useState } from "react";


function FuelMyBoat() {
  const [fuelType, setFuelType] = useState("");
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");

  const prices = { petrol: 185, diesel: 175 };

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
        alt="Boat"
        className="fuel-image"
      />
      <h2>Fuel My Boat ⛵</h2>
      <p>Keep your boat running smoothly with our marine fueling service.</p>

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

export default FuelMyBoat;