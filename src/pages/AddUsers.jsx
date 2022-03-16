import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import addUser from '../utils/addUser';

export default function AddUsers() {
  const [newUser, setNewUser] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    console.log(newUser);
    e.preventDefault();
    await addUser(newUser, navigate, location);
    e.target.reset();
  };
  return (
    <div className="px-8 py-4 max-w-sm">
      <h2 className=" text-3xl">Add a new user</h2>
      <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
        <input
          className="form-field w-full"
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="comment"
          className="form-field w-full"
          placeholder="Comment"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="form-field w-full"
          type="text"
          name="login"
          placeholder="Username"
          onChange={(e) => handleChange(e)}
        />
        <input
          className="form-field w-full"
          type="password"
          name="password"
          placeholder="Password"
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
