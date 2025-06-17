import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Smart Task Scheduler!
        </h1>
        <p className="text-gray-600">
          Use the navigation bar to access your calendar and tasks.
        </p>
      </div>
    </div>
  );
}
