import React, { useContext, useState } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import addStation from '../utils/addStation';

export default function AddStations() {
  const [newStation, setNewStation] = useState({});
  const [authToken] = useContext(authContext);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewStation({
      ...newStation,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newStation);
    await addStation(newStation, authToken);
    e.target.reset();
  };
  return (
    <div className="px-8 py-4 max-w-sm">
      <h2 className=" text-3xl">Add a new station</h2>
      <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
        <input
          className="form-field w-full"
          type="text"
          name="name"
          placeholder="Station Name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="comment"
          className="form-field w-full"
          placeholder="Comment"
          onChange={(e) => handleChange(e)}
        />

        <button
          type="submit"
          className="transition-all rounded-md py-2 bg-cus-blue text-white hover:ring-4 ring-blue-400"
        >
          Add
        </button>
      </form>
    </div>
  );
}
