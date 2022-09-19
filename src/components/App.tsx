import AppRouter from './AppRouter';
import './App.css';
import { useEffect, useState } from 'react';
import { authService } from '../fbase';
import { RootState, useAppDispatch } from '../store';
import { fetchCoaches } from '../store/Coaches';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useAppDispatch();
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const coachesList = useSelector(
    (state: RootState) => state.coachesStore.coaches,
  );

  useEffect(() => {
    dispatch(fetchCoaches());

    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'Initializing...'}
      {/* <ul>
        {Object.values(coachesList).map((coach: any, idx) => (
          <li key={idx} className="card shadow-xl bg-base-100 w-96">
            <div className="card-body">
              <div className="card-title">{coach.name}</div>
              <div>
                {coach.genre.map((g: string, idx: number) => (
                  <span key={idx}>{g}</span>
                ))}
              </div>
              <div>{coach.email}</div>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
