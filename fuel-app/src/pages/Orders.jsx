import React, { useState, useEffect } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [fuelType, setFuelType] = useState("");
  const [litres, setLitres] = useState("");
  const [pricePerLitre, setPricePerLitre] = useState("");
  const [message, setMessage] = useState("");

  // 🧠 Load saved orders from localStorage when page opens
  useEffect(() => {
    const savedOrders = localStorage.getItem("fuelOrders");
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  // 💾 Save orders to localStorage whenever orders change
  useEffect(() => {
    localStorage.setItem("fuelOrders", JSON.stringify(orders));
  }, [orders]);

  // 🧮 Add new order
  const handleAddOrder = () => {
    if (!fuelType || litres <= 0 || pricePerLitre <= 0) {
      setMessage("⚠️ Please fill all details correctly");
      return;
    }

    const cost = litres * pricePerLitre;
    const newOrder = { fuelType, litres, pricePerLitre, cost };

    const updatedOrders = [...orders, newOrder];
    setOrders(updatedOrders);

    // Reset fields
    setFuelType("");
    setLitres("");
    setPricePerLitre("");
    setMessage(`✅ Added ${litres}L of ${fuelType} (KSh ${cost})`);
  };

  // 💰 Calculate total spending
  const totalSpent = orders.reduce((sum, order) => sum + order.cost, 0);

  // 🗑️ Clear all orders
  const handleClearAll = () => {
    localStorage.removeItem("fuelOrders");
    setOrders([]);
    setMessage("🗑️ All orders cleared");
  };

  return (
    <div className="orders-page">
      <h2>Fuel Orders Tracker ⛽</h2>
      <p>Track all your fuel orders and total expenditure below.</p>

      {/* Form */}
      <div className="order-form">
        <select
          value={fuelType}
          onChange={(e) => setFuelType(e.target.value)}
        >
          <option value="">Select Fuel Type</option>
          <option value="petrol">Petrol</option>
          <option value="diesel">Diesel</option>
        </select>

        <input
          type="number"
          placeholder="Litres"
          value={litres}
          onChange={(e) => setLitres(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price per litre (KSh)"
          value={pricePerLitre}
          onChange={(e) => setPricePerLitre(e.target.value)}
        />

        <button onClick={handleAddOrder}>Add Order</button>
        <button onClick={handleClearAll} style={{ backgroundColor: "#f44336" }}>
          Clear All
        </button>
      </div>

      {message && <p className="message">{message}</p>}

      {/* Orders List */}
      {orders.length > 0 ? (
        <div className="orders-table">
          <table>
            <thead>
              <tr>
                <th>Fuel Type</th>
                <th>Litres</th>
                <th>Price/Litre</th>
                <th>Total (KSh)</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.fuelType}</td>
                  <td>{order.litres}</td>
                  <td>{order.pricePerLitre}</td>
                  <td>{order.cost}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total Spent: KSh {totalSpent}</h3>
        </div>
      ) : (
        <p>No orders yet.</p>
      )}
    </div>
  );
}

export default Orders;