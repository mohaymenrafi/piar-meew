import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

// fetching all stations
const useGetAllStations = () => {
  const [stations, setStations] = useState([]);
  const [authToken] = useContext(authContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getStations = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://piar.meew.me/stations', {
          headers: {
            'user-jwt': authToken,
          },
        });
        const result = res.data;
        setStations(result);
      } catch (err) {
        console.log(err.message);
      }
      setLoading(false);
    };
    getStations();
  }, []);
  return [stations, setStations, loading];
};

export default useGetAllStations;
