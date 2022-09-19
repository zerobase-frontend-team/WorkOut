import { Route, Routes } from 'react-router-dom';
import Auth from '../routes/Auth';
import CoachDetail from '../routes/CoachDetail';
import Home from '../routes/Home';
import RegisterCoach from '../routes/RegisterCoach';
import Reservation from '../routes/Reservation';

function AppRouter() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
        <Route path="/schedule" element={<Reservation />}></Route>
        <Route path="/myinfo" element={<Reservation />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/coach/registeration" element={<RegisterCoach />}></Route>
        <Route path="/coach/:cid" element={<CoachDetail />}></Route>
      </Routes>
    </main>
  );
}

export default AppRouter;
