import { useState } from "react";
import { sendFuelRequest } from "../api/fuelApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    fuelAmount: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = await sendFuelRequest(formData);
    setMessage(result.success ? "Request sent successfully!" : "Failed to send request.");
  }

  return (
    <div className="contact-page">
      <h2>Order Fuel</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input name="location" placeholder="Delivery Location" value={formData.location} onChange={handleChange} required />
        <input name="fuelAmount" placeholder="Fuel Amount (Liters)" value={formData.fuelAmount} onChange={handleChange} required />
        <button type="submit">Submit Request</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;
