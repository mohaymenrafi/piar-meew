import React from 'react';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { BsFilePost } from 'react-icons/bs';
import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-sidebar_bg w-72 sidebar-h">
      <div>
        <h3 className="px-3 py-4">Dashbard Menu</h3>
        <ul className="flex flex-col space-y-2 px-3">
          <Link to="/users">
            <li className="sidebar-link">
              <FiUsers />
              <p>Users</p>
            </li>
          </Link>
          <Link to="/stations">
            <li className="sidebar-link">
              <BsFilePost />
              <p>Stations</p>
            </li>
          </Link>
          <Link to="/add-users">
            <li className="sidebar-link">
              <FiUserPlus />
              <p>Add Users</p>
            </li>
          </Link>
          <Link to="/add-stations">
            <li className="sidebar-link">
              <MdPostAdd />
              <p>Add Stations</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
