export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-4">Page Not Found</p>
      <a href="/" className="text-blue-600 hover:underline text-lg">
        Go to Home
      </a>
    </div>
  );
}
