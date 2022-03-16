import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import addUser from '../utils/addUser';

// https://piar.meew.me/users/

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  // saving info to state
  const handleChange = (e) => {
    // TODO: standard passowrd validation
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  console.log(location.pathname);

  // submitting form information
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addUser(userInfo, navigate, location);
    setLoading(false);
  };

  return (
    <div className="bg-image">
      <div className="px-10 py-8 rounded-lg bg-white/20 bg-clip-padding backdrop-blur-lg">
        <h2 className="title">Register Here</h2>

        <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-field"
            placeholder="Full name"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="text"
            name="comment"
            className="form-field"
            placeholder="Comment"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="login"
            className="form-field"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
            required
          />
          <input
            type="password"
            name="password"
            className="form-field"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
            required
          />
          <button
            type="submit"
            className="bg-white transition-all rounded-md py-2 hover:bg-[#1162B5] hover:text-white"
          >
            {loading ? 'Creating' : 'Sign up'}
          </button>
          <p className="text-white">
            Already have an account?{' '}
            <Link to="/login">
              <span className="text-black cursor-pointer">Sign-in</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
