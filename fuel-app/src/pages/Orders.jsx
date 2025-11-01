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
      setMessage("Please fill all details correctly");
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
    <div className="container py-4">
      <div className="card shadow-sm page-surface">
        <div className="card-body">
          <h2 className="card-title">Fuel Orders Tracker ⛽</h2>
          <p className="card-text">Track all your fuel orders and total expenditure below.</p>

          <div className="row g-2 align-items-end">
            <div className="col-md-3">
              <label className="form-label">Fuel Type</label>
              <select className="form-select" value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
                <option value="">Select Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
              </select>
            </div>

            <div className="col-md-2">
              <label className="form-label">Litres</label>
              <input className="form-control" type="number" placeholder="Litres" value={litres} onChange={(e) => setLitres(e.target.value)} />
            </div>

            <div className="col-md-3">
              <label className="form-label">Price per litre (KSh)</label>
              <input className="form-control" type="number" placeholder="Price per litre (KSh)" value={pricePerLitre} onChange={(e) => setPricePerLitre(e.target.value)} />
            </div>

            <div className="col-md-4 d-flex gap-2">
              <button className="btn btn-danger" onClick={handleAddOrder}>Add Order</button>
              <button className="btn btn-outline-secondary" onClick={handleClearAll}>Clear All</button>
            </div>
          </div>

          {message && <p className="message mt-3">{message}</p>}

          {/* Orders List */}
          <div className="mt-4">
            {orders.length > 0 ? (
              <div className="table-responsive">
                <table className="table table-striped">
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
                <h5>Total Spent: KSh {totalSpent}</h5>
              </div>
            ) : (
              <p>No orders yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;