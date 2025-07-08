import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20 space-y-6">
      <h1 className="text-5xl font-bold text-dark">404</h1>
      <p className="text-muted text-lg">Oops! The page you're looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block bg-accent text-white px-6 py-2 rounded hover:bg-dark transition"
      >
        Go back home
      </Link>
    </div>
  );
}
