import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import SmallScale from "./components/pages/SmallScale";
import MediumScale from "./components/pages/MediumScale";
import LargeScale from "./components/pages/LargeScale";
import CropAdvisor from "./components/pages/CropAdvisor";
import CropTracker from "./components/pages/CropTracker";
import Weather from "./components/pages/Weather";
import ProfitChart from "./components/pages/ProfitChart";
import TaskReminder from "./components/pages/TaskReminder";
import Market from "./components/pages/Market";
import Inventory from "./components/pages/Inventory";
import LivestockTracker from "./components/pages/LivestockTracker";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Individual scale pages */}
        <Route path="/dashboard/small-scale" element={<SmallScale />} />
        <Route path="/dashboard/medium-scale" element={<MediumScale />} />
        <Route path="/dashboard/large-scale" element={<LargeScale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
