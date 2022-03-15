import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

// https://piar.meew.me/users/

export default function Register() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ comment: 'New User' });
  const [loading, setLoading] = useState(false);

  // saving info to state
  const handleChange = (e) => {
    // TODO: standard passowrd validation
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // submitting form information
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const submitInfo = async () => {
      setLoading(true);
      try {
        const res = await axios.post('https://piar.meew.me/users', userInfo);
        const result = res.data;
        if (!!result.id) {
          swal(
            'You have succesfully registered! Please login to access your dashboard.'
          ).then(() => {
            navigate('/login');
          });
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    submitInfo();
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
          />
          <input
            type="text"
            name="login"
            className="form-field"
            placeholder="Username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            name="password"
            className="form-field"
            placeholder="Password"
            onChange={(e) => handleChange(e)}
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
