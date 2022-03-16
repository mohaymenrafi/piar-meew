import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { authContext } from '../AuthProvider/AuthProvider';

export default function EditStations() {
  const [station, setStation] = useState({});
  const params = useParams();
  const [authToken] = useContext(authContext);

  // fetch single station using id
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `https://piar.meew.me/stations/${params.id}`,
          {
            headers: {
              'user-jwt': authToken,
            },
          }
        );
        const result = await res.data;
        setStation(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    getUser();
  }, []);

  // saving updated staion info to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStation({
      ...station,
      [name]: value,
    });
  };

  // submitting updated station info to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitEditedStation = async () => {
      try {
        const res = await axios.patch(
          `https://piar.meew.me/stations/${params.id}`,
          station,
          {
            headers: {
              'user-jwt': authToken,
            },
          }
        );
        swal('Station Edited Successfully');
      } catch (err) {
        console.error(err.message);
      }
    };
    submitEditedStation();
  };
  return (
    <div className="px-8 py-4 max-w-sm">
      <h2 className=" text-3xl">Edit Station</h2>
      <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
        <input
          className="form-field w-full"
          type="text"
          name="name"
          placeholder="Station Name"
          value={station.name || ''}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="comment"
          className="form-field w-full"
          placeholder="Comment"
          value={station.comment || ''}
          onChange={(e) => handleChange(e)}
        />

        <button
          type="submit"
          className="transition-all rounded-md py-2 bg-cus-blue text-white hover:ring-4 ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
