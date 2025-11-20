import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-md p-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-green-700">SmartFarmKE</h1>

      <div className="flex gap-6 text-gray-700">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add-sale">Add Sale</Link>
        <Link to="/add-expense">Add Expense</Link>
      </div>
    </div>
  );
}

export default Navbar;
