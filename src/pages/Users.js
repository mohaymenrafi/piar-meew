import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import DataTable from '../components/DataTable';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [authToken] = useContext(authContext);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get('https://piar.meew.me/users', {
          headers: {
            'user-jwt': authToken,
          },
        });
        const result = await res.data;
        setUsers(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <DataTable datas={users} setDatas={setUsers} />
    </div>
  );
}
