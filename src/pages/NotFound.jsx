import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-image">
      <div className="glass-effect px-12 py-4 rounded-lg flex flex-col justify-center items-center">
        <h2 className="title">The page you're looking for is not found</h2>
        <Link
          to="/"
          className="bg-white transition-all text-black w-40 text-center py-2 rounded-lg hover:text-white mt-4 hover:bg-cus-blue"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
