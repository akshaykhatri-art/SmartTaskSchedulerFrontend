import Navbar from "../components/Navbar";

export default function Calendar() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Calendar View
        </h2>
        <p className="text-gray-600">Your calendar events will appear here.</p>
      </div>
    </div>
  );
}
