import { useState } from "react";


function FuelMyRide() {
  const [liters, setLiters] = useState("");
  const [price, setPrice] = useState(0);
  const [fuelType, setFuelType] = useState("");
  const [message, setMessage] = useState("");

  // Set different price per litre depending on fuel type
  const prices = {
    petrol: 180,
    diesel: 170,
  };

  const handleOrder = () => {
    if (!liters || liters <= 0 || !fuelType) {
      setMessage("Please enter litres and select fuel type");
      return;
    }

    const total = liters * prices[fuelType];
    setPrice(total);
    setMessage(
      `You ordered ${liters} litres of ${fuelType} for KSh ${total.toLocaleString()}`
    );
  };

  return (
    <div className="fuel-ride-section">
      <div className="fuel-info">
        {/* 🚛 Fuel Truck Image */}
        <img
          
          alt="Fuel Truck"
          className="fuel-image"
        />

        <div className="fuel-text">
          <h2>Fuel My Ride 🚛</h2>
          <p>Order fuel directly to your vehicle anywhere in Kenya.</p>

          {/* 🔹 Fuel Type Dropdown */}
          <select
            value={fuelType}
            onChange={(e) => setFuelType(e.target.value)}
          >
            <option value="">Select Fuel Type</option>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
          </select>

          {/* 🔹 Litres Input */}
          <input
            type="number"
            placeholder="Enter litres"
            value={liters}
            onChange={(e) => setLiters(e.target.value)}
          />

          {/* 🔹 Order Button */}
          <button onClick={handleOrder}>Order Fuel</button>

          {/* 🔹 Price Display */}
          {price > 0 && (
            <div className="price-box">
              <p>
                Total Price: <strong>KSh {price.toLocaleString()}</strong>
              </p>
            </div>
          )}

          {/* 🔹 Message */}
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default FuelMyRide;
