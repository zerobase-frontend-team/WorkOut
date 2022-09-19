import AppRouter from './AppRouter';
import './App.css';
import { useEffect, useState } from 'react';
import { authService } from '../fbase';
import { RootState, useAppDispatch } from '../store';
import { fetchCoaches } from '../store/Coaches';
import { useSelector } from 'react-redux';

import Header from './Header';

function App() {
  const dispatch = useAppDispatch();
  const coachesList = useSelector(
    (state: RootState) => state.coachesStore.coaches,
  );

  // useEffect(() => {
  //   dispatch(fetchCoaches());

  //   authService.onAuthStateChanged((user) => {
  //     if (user) {
  //       setIsLoggedIn(true);
  //     } else {
  //       setIsLoggedIn(false);
  //     }
  //     setInit(true);
  //   });
  // }, []);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
