import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// Large-scale components
import CropAdvisor from "./CropAdvisor";
import LivestockTracker from "./LivestockTracker";
import TaskReminder from "./TaskReminder";
import Weather from "./Weather";
import CropTracker from "./CropTracker";

// Images for each tab
import cropImg from "../../assets/crop.png";
import livestockImg from "../../assets/livestock.png";
import tasksImg from "../../assets/tasks.png";
import weatherImg from "../../assets/weather.png";
import advisorImg from "../../assets/advisor.png";

function LargeScale() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profit");
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [saleAmount, setSaleAmount] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const tabBackgrounds = {
    cropTracker: cropImg,
    livestock: livestockImg,
    tasks: tasksImg,
    weather: weatherImg,
    advisor: advisorImg,
  };

  const addSale = () => {
    if (!saleAmount) return;
    setSales([...sales, Number(saleAmount)]);
    setSaleAmount("");
  };

  const addExpense = () => {
    if (!expenseAmount) return;
    setExpenses([...expenses, Number(expenseAmount)]);
    setExpenseAmount("");
  };

  // Profit chart data
  const data = [];
  const maxLength = Math.max(sales.length, expenses.length);
  let cumulativeProfit = 0;

  for (let i = 0; i < maxLength; i++) {
    const sale = sales[i] || 0;
    const expense = expenses[i] || 0;
    cumulativeProfit += sale - expense;

    data.push({
      month: `Entry ${i + 1}`,
      profit: Math.abs(cumulativeProfit), // Always positive
      sales: sale,
      expenses: expense,
    });
  }

  const totalSales = sales.reduce((a, b) => a + b, 0);
  const totalExpenses = expenses.reduce((a, b) => a + b, 0);
  const totalProfit = Math.abs(totalSales - totalExpenses); // Always positive

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        backgroundImage:
          activeTab !== "profit" ? `url(${tabBackgrounds[activeTab]})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 style={{ color: activeTab !== "profit" ? "white" : "black" }}>
        Large Scale Farm
      </h1>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {["profit", "cropTracker", "livestock", "tasks", "weather", "advisor"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "10px 15px",
              cursor: "pointer",
              backgroundColor: activeTab === tab ? "#22c55e" : "#e0e0e0",
              color: activeTab === tab ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {tab === "profit"
              ? "Sales / Expenses / Profit"
              : tab === "cropTracker"
              ? "Crop Tracker"
              : tab === "livestock"
              ? "Livestock"
              : tab === "tasks"
              ? "Tasks"
              : tab === "weather"
              ? "Weather"
              : "Crop Advisor"}
          </button>
        ))}
      </div>

      {/* Floating Content on Background */}
      {activeTab !== "profit" && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.55)",
            padding: "25px",
            borderRadius: "10px",
            width: "80%",
            maxWidth: "600px",
            margin: "auto",
            color: "white",
            backdropFilter: "blur(4px)",
          }}
        >
          {activeTab === "cropTracker" && <CropTracker />}
          {activeTab === "livestock" && <LivestockTracker />}
          {activeTab === "tasks" && <TaskReminder />}
          {activeTab === "weather" && <Weather />}
          {activeTab === "advisor" && <CropAdvisor />}
        </div>
      )}

      {/* Profit Tab */}
      {activeTab === "profit" && (
        <div>
          <h2>Sales / Expenses / Profit</h2>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="number"
              placeholder="Enter Sale Amount"
              value={saleAmount}
              onChange={(e) => setSaleAmount(e.target.value)}
            />
            <button onClick={addSale}>Add Sale</button>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <input
              type="number"
              placeholder="Enter Expense Amount"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
            <button onClick={addExpense}>Add Expense</button>
          </div>

          <div style={{ marginTop: "20px" }}>
            <p>
              <strong>Total Sales:</strong> {totalSales}
            </p>
            <p>
              <strong>Total Expenses:</strong> {totalExpenses}
            </p>
            <p>
              <strong>Profit:</strong> {totalProfit}
            </p>
          </div>

          {data.length > 0 && (
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
            </LineChart>
          )}
        </div>
      )}

      {/* Go Back Button */}
      <div style={{ marginTop: "40px" }}>
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default LargeScale;
