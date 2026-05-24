import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-white to-rose-50 px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-gray-900 mb-2">404</h1>
        <p className="text-2xl font-semibold text-gray-900 mb-2">Page not found</p>
        <p className="text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        <Link to="/" className="inline-block bg-gradient-to-r from-slate-800 via-violet-700 to-teal-600 text-white px-8 py-3 rounded-lg hover:opacity-95 font-semibold">
          Go home
        </Link>
      </div>
    </div>
  );
}
