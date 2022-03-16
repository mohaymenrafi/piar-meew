import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import addUser from '../utils/addUser';

export default function Register() {
  const navigate = useNavigate();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // saving info to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      const regex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      if (regex.test(value)) {
        setError('');
      } else {
        setError(
          'Password minimum 8 characters long with atleaset one Uppercase & one lowercase letter, one number and one special character'
        );
      }
    }
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  // submitting form information to server
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    addUser(userInfo, navigate, location);
    console.log(userInfo);
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
          {!!error && (
            <div className="text-sm w-60">
              <p>{error}</p>
            </div>
          )}
          <button
            type="submit"
            disabled={!!error}
            className="bg-white transition-all rounded-md py-2 hover:bg-[#1162B5] hover:text-white disabled:bg-gray-300 disabled:text-black disabled:cursor-not-allowed"
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
