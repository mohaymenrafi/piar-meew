import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Sidebar, Topbar } from '../components';

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const userToken = localStorage.getItem('user_jwt');
  useEffect(() => {
    setLoading(true);
    const getUsers = async () => {
      try {
        const res = await axios.get('https://piar.meew.me/users', {
          headers: {
            'user-jwt': userToken,
          },
        });
        setUsers(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
    setLoading(false);
  }, []);
  if (loading) return <h2 className="text-6xl">Loading.....</h2>;
  return (
    <div>
      <Topbar />
      <Sidebar />
    </div>
  );
}
