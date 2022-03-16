import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

// fetching all users from server
const useGetAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [authToken] = useContext(authContext);
  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
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
      setLoading(false);
    };
    getUsers();
  }, []);
  return [users, setUsers, loading];
};

export default useGetAllUsers;
