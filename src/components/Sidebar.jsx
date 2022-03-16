import React from 'react';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { BsFilePost } from 'react-icons/bs';
import { MdPostAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="bg-sidebar_bg sidebar-h w-16 md:w-72">
      <div>
        <h3 className="px-3 py-4 hidden md:block">Dashbard Menu</h3>
        <ul className="flex flex-col space-y-2 px-1 md:px-3 mt-4 md:mt-0">
          <Link to="/">
            <li className="sidebar-link">
              <FiUsers className="sidebar-icon" />
              <p className="sidebaer-menu">Users</p>
            </li>
          </Link>
          <Link to="/stations">
            <li className="sidebar-link">
              <BsFilePost className="sidebar-icon" />
              <p className="sidebaer-menu">Stations</p>
            </li>
          </Link>
          <Link to="/users/add">
            <li className="sidebar-link">
              <FiUserPlus className="sidebar-icon" />
              <p className="sidebaer-menu">Add Users</p>
            </li>
          </Link>
          <Link to="/stations/add">
            <li className="sidebar-link">
              <MdPostAdd className="sidebar-icon" />
              <p className="sidebaer-menu">Add Stations</p>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
