import Navbar from "../components/Navbar";

export default function Tasks() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Your Tasks
        </h2>
        <p className="text-gray-600">Manage and track your tasks here.</p>
      </div>
    </div>
  );
}
