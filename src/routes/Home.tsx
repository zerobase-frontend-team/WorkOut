import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

function Home() {
  return (
    <>
      <Auth />
      <Link className="btn" to="/coach/registeration">
        Register Coach
      </Link>
    </>
  );
}

export default Home;
