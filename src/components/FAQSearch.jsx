export default function FAQSearch({ search, setSearch }) {
  return (
    <div className="container w-full max-w-7xl mx-auto mx-auto mt-10">
      <input
        type="text"
        placeholder="Savol qidiring..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-4 bg-gray-100 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
