import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-violet-700">404</h1>
      <p className="mt-4 text-gray-600">Page not found</p>
      <Link to="/" className="mt-6 text-violet-600 hover:underline">Go home</Link>
    </div>
  );
}
