import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { authService } from '../fbase';
import { useNavigate } from 'react-router-dom';

function Auth() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNewAccount, setIsNewAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else {
      setUsername(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data;
    setLoading(true);
    try {
      if (isNewAccount) {
        // create Account
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password,
        );
        updateProfile(data.user, { displayName: username });
      } else {
        // Log in
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      navigate('/');
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeAccountSetting = () => {
    setIsNewAccount((prevState) => !prevState);
  };

  return (
    <>
      {isNewAccount ? (
        <>
          <form onSubmit={handleSubmit} className="form-control">
            <label className="input-group">
              <span className="w-40 flex justify-center">Username</span>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="input input-bordered"
                onChange={handleChange}
              />
            </label>
            <label className="input-group">
              <span className="w-40 flex justify-center">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                onChange={handleChange}
              />
            </label>
            <label className="input-group">
              <span className="w-40 flex justify-center">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                onChange={handleChange}
              />
            </label>
            <input
              className="btn"
              type="submit"
              value="Create Account"
              disabled={loading}
            />
          </form>
          <div className="btn" onClick={handleChangeAccountSetting}>
            Go to Login
          </div>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit} className="form-control">
            <label className="input-group">
              <span className="w-40 flex justify-center">Email</span>
              <input
                type="text"
                name="email"
                placeholder="Your Email"
                className="input input-bordered"
                onChange={handleChange}
              />
            </label>
            <label className="input-group">
              <span className="w-40 flex justify-center">Password</span>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                className="input input-bordered"
                onChange={handleChange}
              />
            </label>
            <input
              className="btn"
              type="submit"
              value="Login"
              disabled={loading}
            />
          </form>
          <div className="btn" onClick={handleChangeAccountSetting}>
            Get new Account
          </div>
        </>
      )}
    </>
  );
}

export default Auth;
