import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../AuthProvider/AuthProvider';

export default function Login() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  const [authToken, setAuthToken] = useContext(authContext);
  const [error, setError] = useState('');

  // save login info to state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };
  // submit login info to server
  const handleSubmit = (e) => {
    e.preventDefault();
    const submitLogin = async () => {
      try {
        setError('');
        const res = await axios.post(
          'https://piar.meew.me/users/auth',
          loginInfo
        );

        const userToken = res.data.user_jwt;
        if (!!userToken) {
          localStorage.setItem('user_jwt', userToken);
          setAuthToken(userToken);
          navigate('/');
        }
      } catch (err) {
        console.error(err.message);
        setError(`Username or Password didn't match`);
      }
    };
    submitLogin();
  };

  return (
    <div className="bg-image">
      <div className="px-10 py-8 rounded-lg glass-effect">
        <h2 className="title ">Hello</h2>
        <h2 className="title">Welcome Back</h2>

        <form className="flex flex-col my-6 space-y-4" onSubmit={handleSubmit}>
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
            <div className="w-60">
              <p>{error}</p>
            </div>
          )}
          <button
            type="submit"
            className="bg-white transition-all rounded-md py-2 hover:bg-cus-blue hover:text-white"
          >
            Log in
          </button>
          <p className="text-white">
            Don't have account yet?{' '}
            <Link to="/register">
              <span className="text-black cursor-pointer">Sign-up</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
