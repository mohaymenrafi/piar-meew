import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

// fetching all stations
const useGetAllStations = () => {
  const [stations, setStations] = useState([]);
  const [authToken] = useContext(authContext);
  useEffect(() => {
    const getStations = async () => {
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
    };
    getStations();
  }, []);
  return [stations, setStations];
};

export default useGetAllStations;
