import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { authContext } from '../AuthProvider/AuthProvider';

export default function Topbar() {
  const [authToken, setAuthToken] = useContext(authContext);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('https://piar.meew.me/users/me', {
        headers: {
          'user-jwt': authToken,
        },
      });
      setUser(res.data);
    };
    getUser();
  }, []);

  // Logout function
  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('user_jwt');
  };
  return (
    <div className="px-4 py-2 shadow flex items-center justify-between relative z-10">
      {/* <div className="md:hidden">
        <AiOutlineBars className="text-xl" />
      </div> */}
      <div>
        <h2 className="text-3xl font-semibold">Piar Meew</h2>
      </div>
      <div className=" flex items-center space-x-4">
        <h3 className="">Hi, {user?.name}</h3>

        <button
          type="button"
          className="bg-blue-500 hover:bg-cus-blue transition-all text-white rounded-md px-3 md:px-5 py-1 md:py-2 text-sm md:text-base"
          onClick={handleLogout}
        >
          Signout
        </button>
      </div>
    </div>
  );
}
