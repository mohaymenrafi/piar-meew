import React from 'react';

export default function Topbar() {
  return (
    <div className="px-4 py-2 shadow flex items-center justify-between relative z-10">
      <div>
        <h2 className="text-3xl font-semibold">Piar Meew</h2>
      </div>
      <div className=" flex items-center space-x-4">
        <h3>Hi, john_doe</h3>

        <button
          type="button"
          className="bg-blue-500 hover:bg-cus-blue transition-all text-white rounded-md px-5 py-2"
        >
          Signout
        </button>
      </div>
    </div>
  );
}
