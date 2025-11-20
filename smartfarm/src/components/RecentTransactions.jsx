function RecentTransactions({ items }) {
  return (
    <div className="mt-6 bg-white p-4 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-3">Recent Transactions</h3>

      {items.length === 0 && <p className="text-gray-500">No data yet.</p>}

      <ul className="divide-y">
        {items.map((t, i) => (
          <li key={i} className="py-3 flex justify-between">
            <span>{t.title}</span>
            <span className="font-semibold">{t.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentTransactions;
