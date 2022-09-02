import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../routes/Home';
import Reservation from '../routes/Reservation';

function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/schedule" element={<Reservation />}></Route>
        <Route path="/myinfo" element={<Reservation />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </main>
  );
}

export default AppRouter;
