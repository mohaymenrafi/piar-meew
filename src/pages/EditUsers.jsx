import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

export default function EditUsers() {
  const [user, setUser] = useState({});
  const params = useParams();
  const [authToken] = useContext(authContext);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`https://piar.meew.me/users/${params.id}`, {
        headers: {
          'user-jwt': authToken,
        },
      });
      const result = await res.data;
      setUser(result);
    };
    getUser();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, comment, login, password } = user;
    const updatedUser = { name, comment, login, password };

    const submitEdit = async () => {
      try {
        const res = await axios.patch(
          `https://piar.meew.me/users/${params.id}`,
          updatedUser,
          {
            headers: {
              'user-jwt': authToken,
            },
          }
        );
        const result = await res.data;
        console.log(result);
      } catch (err) {
        console.error(err.message);
      }
    };
    submitEdit();
  };

  return (
    <div className="px-8 py-4 max-w-sm">
      <h2 className=" text-3xl">Edit User</h2>
      <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
        <input
          className="form-field w-full"
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name || ''}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="comment"
          className="form-field w-full"
          placeholder="Comment"
          value={user.comment || ''}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="form-field w-full"
          type="text"
          name="login"
          placeholder="Username"
          value={user.login || ''}
          onChange={(e) => handleChange(e)}
        />
        <input
          className="form-field w-full"
          type="password"
          name="password"
          placeholder="password to verify"
          value={user.password || ''}
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
