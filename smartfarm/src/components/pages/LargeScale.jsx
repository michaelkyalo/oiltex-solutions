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

import CropAdvisor from "./CropAdvisor";
import LivestockTracker from "./LivestockTracker";
import TaskReminder from "./TaskReminder";
import Weather from "./Weather";
import CropTracker from "./CropTracker";
import SoilPhAdvisor from "./SoilPhAdvisor";

// NEW large-scale components (only remaining ones)
import WorkerManager from "./WorkManager";
import MachineryTracker from "./MachineryTracker";

// Images
import cropImg from "../../assets/crop.jpg";
import livestockImg from "../../assets/livestock.jpg";
import tasksImg from "../../assets/tasks.jpg";
import weatherImg from "../../assets/weather.jpg";
import advisorImg from "../../assets/advisor.jpg";
import soilImg from "../../assets/soil.jpg";
import workersImg from "../../assets/workers.jpg";
import tractorImg from "../../assets/tractor.jpg";

function LargeScale() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profit");

  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [saleAmount, setSaleAmount] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  // BACKGROUND IMAGES PER TAB
  const tabBackgrounds = {
    cropTracker: cropImg,
    livestock: livestockImg,
    tasks: tasksImg,
    weather: weatherImg,
    advisor: advisorImg,
    soilPh: soilImg,
    workers: workersImg,
    machinery: tractorImg,
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
      profit: cumulativeProfit,
      sales: sale,
      expenses: expense,
    });
  }

  const totalSales = sales.reduce((a, b) => a + b, 0);
  const totalExpenses = expenses.reduce((a, b) => a + b, 0);
  const totalProfit = totalSales - totalExpenses;

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
        Large Scale Farm Management System
      </h1>

      {/* TABS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
        }}
      >
        {[
          "profit",
          "cropTracker",
          "livestock",
          "tasks",
          "weather",
          "advisor",
          "soilPh",
          "workers",
          "machinery",
        ].map((tab) => (
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
            {
              {
                profit: "Profit",
                cropTracker: "Crop Tracker",
                livestock: "Livestock",
                tasks: "Tasks",
                weather: "Weather",
                advisor: "Crop Advisor",
                soilPh: "Soil pH",
                workers: "Workers",
                machinery: "Machinery",
              }[tab]
            }
          </button>
        ))}
      </div>

      {/* CONTENT AREA */}
      {activeTab !== "profit" && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: "30px",
            borderRadius: "12px",
            width: "90%",
            maxWidth: "700px",
            margin: "auto",
            color: "white",
            backdropFilter: "blur(4px)",
            overflow: "visible",
          }}
        >
          {activeTab === "cropTracker" && <CropTracker />}
          {activeTab === "livestock" && <LivestockTracker />}
          {activeTab === "tasks" && <TaskReminder />}
          {activeTab === "weather" && <Weather />}
          {activeTab === "advisor" && <CropAdvisor />}
          {activeTab === "soilPh" && <SoilPhAdvisor />}
          {activeTab === "workers" && <WorkerManager />}
          {activeTab === "machinery" && <MachineryTracker />}
        </div>
      )}

      {/* PROFIT TAB */}
      {activeTab === "profit" && (
        <div>
          <h2>Sales / Expenses / Profit</h2>

          <div>
            <input
              type="number"
              placeholder="Enter Sale Amount"
              value={saleAmount}
              onChange={(e) => setSaleAmount(e.target.value)}
            />
            <button onClick={addSale}>Add Sale</button>
          </div>

          <br />

          <div>
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
            <p style={{ color: totalProfit < 0 ? "red" : "green" }}>
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
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={3} />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" />
              <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
            </LineChart>
          )}
        </div>
      )}

      {/* Back to Dashboard */}
      <button
        onClick={() => navigate("/dashboard")}
        style={{
          marginTop: "40px",
          padding: "10px 20px",
          backgroundColor: "#22c55e",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Home
      </button>
    </div>
  );
}

export default LargeScale;
