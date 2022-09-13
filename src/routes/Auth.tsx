import React, { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { authService } from '../fbase';

function Auth() {
  const user = authService.currentUser;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;

    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data;
    try {
      if (newAccount) {
        // create Account
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password,
        );
      } else {
        // Log in
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {!user ? (
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="text"
            placeholder="Email"
            required
            value={email}
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
          <input
            className="btn"
            type="submit"
            value={newAccount ? 'Create Account' : 'Log in'}
          />
        </form>
      ) : (
        <div>{user.email}</div>
      )}
    </div>
  );
}

export default Auth;
