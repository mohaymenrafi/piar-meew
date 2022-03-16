import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar, Topbar } from '../components';

import {
  Users,
  Stations,
  AddUsers,
  AddStations,
  EditUsers,
  EditStations,
} from './index';
import NotFound from './NotFound';

export default function Home() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="stations" element={<Stations />} />
            <Route path="users/add/" element={<AddUsers />} />
            <Route path="stations/add/" element={<AddStations />} />
            <Route path="users/edit/:id" element={<EditUsers />} />
            <Route path="stations/edit/:id" element={<EditStations />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
