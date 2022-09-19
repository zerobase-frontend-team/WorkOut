import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CoachList from '../components/CoachList';
import { RootState, useAppDispatch, useAppSelector } from '../store';
import { userActions } from '../store/User';

function Home() {
  const [userIsCoach, setUserIsCoach] = useState(false);

  const coachIdList = useAppSelector(
    (state: RootState) => state.coachesStore.coachIdList,
  );
  const userId = useAppSelector(
    (state: RootState) => state.userStore.userObj.id,
  );
  const userObj = useAppSelector((state: RootState) => state.userStore.userObj);

  useEffect(() => {
    checkUserIsCoach();
  }, [userObj]);

  const checkUserIsCoach = () => {
    const idx = coachIdList.findIndex((coachId: string) => coachId === userId);
    setUserIsCoach(idx !== -1);
  };

  return (
    <>
      {!userIsCoach && (
        <Link className="btn" to="/coach/registeration">
          Register Coach
        </Link>
      )}

      <CoachList />
    </>
  );
}

export default Home;
